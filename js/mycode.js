
//Author:Maria Järvinen
// 11/26/2021



/**
     * Calculates the body mass index
     * @param {email} email   email address from input fiels id email
     * @returns {text}    warning or thank you note
*/

function onSubmit(){

    let email = document.getElementById('email').value;
    let text= '';
    if(email === ''){
        text ='Enter your email address, please.';
    }else{
        text ='Thank You for your subscription!';
    }
    document.getElementById('thanks').innerHTML = text;
   return false;
     
};

