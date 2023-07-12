const form = document.querySelector('.login-form');

form.addEventListener('submit', onSubmit);

function onSubmit(evt){
    evt.preventDefault();

    const formElement = evt.currentTarget.elements;
    const mail = formElement.email;
    const password = formElement.password;

    if (mail.value === '' || password.value === ''){
        alert ('Please, fill in all fields');
    } else {
        const formData = {
            mail,
            password,
        };
        console.log(formData);

        form.reset();
    };
}
