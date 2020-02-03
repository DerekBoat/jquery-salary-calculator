//Create an application that records employee salaries and adds salaries up to report monthly costs.

//The application should have an input form that collects employee first name, last name, ID number, job title, annual salary.
$( document ).ready( onReady );

function onReady(){

    $('#submitEmployee').on('click', addingEmployee);
    $('#employeesList').on('click', '#deleteButton', deleteEmployee);
}// end of onReady function

let employees = [];


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
    
    el.append(`<li> ${employees[i].firstName} ${employees[i].lastName} ${employees[i].idNumber}
     ${employees[i].jobTitle} ${employees[i].annualSalary}<button id="deleteButton">Delete</button></li>`);
} //end of displayEmployees

}
function deleteEmployee(){
 
}

function monthlyCost(){
    let el = $('#monthlyCost');
    el.empty();
    let totalMonthlyCost = 0;
    for(i=0; i<employees.length; i++){
        totalMonthlyCost += Number(employees[i].annualSalary/12); 
        console.log(totalMonthlyCost);
       el.append(`${totalMonthlyCost}`);
    
    }
}//end of monthlyCost