// ----------------------------------------------------
// FORM
// ----------------------------------------------------

const formName = document.querySelector("#contactform-name");
formName.addEventListener('blur', CheckFieldBlur);

const formEmail = document.querySelector("#contactform-email");
formEmail.addEventListener('blur', ValidateEmailBlur);

const formPhone = document.querySelector("#contactform-phone");
formPhone.addEventListener('blur', CheckFieldBlur);

const formSubject = document.querySelector("#contactform-subject");
formSubject.addEventListener('blur', CheckFieldBlur);

const formMessage = document.querySelector("#contactform-message");
formMessage.addEventListener('blur', CheckFieldBlur);

const alertColor = "#c41a1a";


function CheckFieldBlur (e)
{
    if (!e.target.value)
    {
        e.target.style.borderBottomColor = alertColor;
    }
    else
    {
        e.target.style.borderBottomColor = "";
    }
}


function ValidateEmailBlur(e) {

    var validRegex = /^[a-zA-Z0-9-.]+@[a-zA-Z0-9-.]+\.[a-zA-Z0-9-]*$/;
  
    if (!e.target.value.match(validRegex))
    {
        e.target.style.borderBottomColor = alertColor;
    }
    else
    {
        e.target.style.borderBottomColor = "";
    }
}


// ----------------------------------------------------
// SUBMIT
// ----------------------------------------------------


const buttonSubmit = document.querySelector("#contactform-submit");
buttonSubmit.addEventListener('click', CheckAll);

function CheckSend (field)
{
    if (!field.value)
    {
        field.style.borderBottomColor = alertColor;
        return false;
    }
    return true;
}


function CheckEmailSend (field)
{
    var validRegex = /^[a-zA-Z0-9]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-]*$/;

    if (!field.value.match(validRegex))
    {
        field.style.borderBottomColor = alertColor;
        return false;
    }
    return true;
}


function CheckAll(e)
{
    e.preventDefault();
    let listOfChecks = [];

    listOfChecks.push(CheckSend(formName));
    listOfChecks.push(CheckEmailSend(formEmail));
    listOfChecks.push(CheckSend(formPhone));
    listOfChecks.push(CheckSend(formSubject));
    listOfChecks.push(CheckSend(formMessage));
    
    if(listOfChecks.every(x => x == true))
        SubmitData();
}


// ----------------------------------------------------
// SEND DATA
// ----------------------------------------------------

function SubmitData(){
    
    console.log("Sending form");

    let name = formName.value;
    let email = formEmail.value;
    let phone = formPhone.value;
    let subject = formSubject.value;
    let message = formMessage.value;


    let form = {
        "Name" : name,
        "Email" : email,
        "Phone" : phone,
        "Subject" : subject,
        "Message" : message
    }

    postData("http://localhost:8081/api/v1/create_prospe", form);
}