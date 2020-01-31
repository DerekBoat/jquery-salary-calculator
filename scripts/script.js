//Create an application that records employee salaries and adds salaries up to report monthly costs.

//The application should have an input form that collects employee first name, last name, ID number, job title, annual salary.
$( document ).ready( onReady );

function onReady(){

    $('#submitEmployee').on('click', addingEmployee);
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
}// end of addingEmpoloyees
//pushing the employees to the array employees

function displayEmployees(){

    
}
