const form = document.querySelector('.login-form');

form.addEventListener('submit', onSubmit);
const user = {};

function onSubmit(evt){
    evt.preventDefault();

    const formElement = evt.currentTarget.elements;
    const email = formElement.email;
    const password = formElement.password;

    if (email.value === '' || password.value === ''){
        alert ('Please, fill in all fields');
    } else {
        user.email = email.value;
        user.password = password.value;
        
        console.log(user.email);
        console.log(user.password);

        form.reset();
    };
}
