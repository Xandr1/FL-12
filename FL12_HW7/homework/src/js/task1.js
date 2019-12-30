let currentEmail;
let currentPass;
let newPass;
let passConfirm;

currentEmail = prompt('Enter your e-mail: ');
if (currentEmail === null || currentEmail === ''){
    alert('Canceled');
} else if (currentEmail.length < 5) {
    alert('I don\'t know any emails having name length less than 5 symbols');
} else if (currentEmail === 'user@gmail.com' || currentEmail === 'admin@gmail.com') {
    currentPass = prompt('Enter password: ');
   if (currentPass === null || currentPass === ''){
        alert('Canceled');
    } else if (currentEmail === 'user@gmail.com' && currentPass === 'UserPass' || 
    currentEmail === 'admin@gmail.com' && currentPass === 'AdminPass'){
        newPass = confirm('Do you want to change your password?');
        if (newPass === false){
            alert('You have failed the change.');
        } else{
            currentPass = prompt('Enter the old password:');
            if (currentEmail === 'user@gmail.com' && currentPass === 'UserPass' || 
            currentEmail === 'admin@gmail.com' && currentPass === 'AdminPass'){
                newPass = prompt('Enter new password:');
                if(newPass === null || newPass === ''){
                    alert('Canceled');
                } else if (newPass.length < 6){
                    alert('It’s too short password. Sorry.');
                } else {
                    passConfirm = prompt('Enter new password again:');
                    if (passConfirm !== newPass){
                        alert('You wrote the wrong password.');
                    } else {
                        alert('You have successfully changed your password.');
                    }        
                }
            } else {
                alert('Wrong password');
            }
        }      
    } else {
        alert('Wrong password');
    }
} else{
    alert('I don’t know you');
}
