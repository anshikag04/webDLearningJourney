function submitForm() {
    let firstName = document.getElementById('first-name').value
    let lastName = document.getElementById('last-name').value
    let email = document.getElementById('email').value
    let password = document.getElementById('password').value
    let confirmPassword = document.getElementById('confirm-password').value
    if(firstName!='' && lastName!="" && email!= '') {
        if(firstName.length>3 && lastName.length>3){
            if(email.includes('@') && email.includes('.com')){
                if(password.length>8){
                    if(password==confirmPassword){
                        alert("Form Submitted");
                    }
                    else{
                        alert("Passowrd does not match!")
                    }
                }
                else{
                    alert("Password length less than 8 character!")
                }
            }
            else {
                alert("Email incorrect!");
            }
        }
        else {
            alert("Name incorrect!")
        }
    }
    else {
        alert("Fields Cannot be empty!")
    }
}