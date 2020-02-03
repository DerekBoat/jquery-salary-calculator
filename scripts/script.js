//Create an application that records employee salaries and adds salaries up to report monthly costs.

//The application should have an input form that collects employee first name, last name, ID number, job title, annual salary.
$( document ).ready( onReady );

let employees = [];


function onReady(){

    $('#submitEmployee').on('click', addingEmployee);
    $('#employeesList').on('click', '.deleteButton', deleteEmployee);
}// end of onReady function




function addingEmployee(){

    let employeeObject = {
        firstName: $('#firstNameInput').val(),
        lastName: $('#lastNameInput').val(),
        idNumber: $('#idInput').val(),
        jobTitle: $('#jobInput').val(),
        annualSalary: $('#salaryInput').val()
    }
    $( '#firstNameInput' ).val( '' );
    $( '#lastNameInput' ).val( '' );
    $( '#idInput' ).val( '' );
    $( '#jobInput' ).val( '' );
    $( '#salaryInput' ).val( '' );
    //emptying out the object
    employees.push(employeeObject);
    displayEmployees();
    monthlyCost();
}// end of addingEmpoloyees
//pushing the employees to the array employees

function displayEmployees(){
    let el = $('#employeesList');
    el.empty();
for(i=0; i<employees.length; i++){
    el.append('<tr>' + '<td>' + employees[i].firstName + '</td>' + '<td>' + employees[i].lastName + 
    '</td>' + '<td>' + employees[i].idNumber + '</td>' + '<td>' + employees[i].jobTitle + '</td>'
    + '<td>' + employees[i].annualSalary + '</td>' +  '<td>' + '<button class="deleteButton">Delete</button>'
    + '</td>' + '</tr>');
}

} //end of displayEmployees


function deleteEmployee(){
 let el = $(this).parent().parent();
    el.remove();
    employees.splice(employees.indexOf());
    // for(i=0; i<employees.length; i++){
    //     delete empoloyees[i];
// }
}

function monthlyCost(){
    
    let totalMonthlyCost = 0;
 
    for(i=0; i<employees.length; i++){
       
        totalMonthlyCost += Number(employees[i].annualSalary/12); 
        let el = $('#monthlyCost');
        console.log(totalMonthlyCost);
        el.empty();
        el.append(`Total Monthly Cost: $${totalMonthlyCost}`);
    
    }
    if(totalMonthlyCost > 20000){
        $('#monthlyCost').css('background-color', 'red');
    }
    else{
    }
}//end of monthlyCost
