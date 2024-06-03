const formData = {
    email: "",
    message: "",
};
const inputEl = document.querySelector('.feedback-form');
const btnSubmit = document.querySelector('.btn-submit');
const areaEl = document.querySelector('.textarea-form');
inputEl.addEventListener('input', (e) => {
    formData.email = inputEl.elements.email.value;
    formData.message = inputEl.elements.message.value;
    const zip = JSON.stringify(formData);
    localStorage.setItem('feedback-form-state', zip);
});
if (localStorage.getItem('feedback-form-state').length !== 0) {
    const parseData = JSON.parse(localStorage.getItem('feedback-form-state'))
    inputEl.elements.email.value = parseData.email;
    inputEl.elements.message.value = parseData.message;
    formData.email = inputEl.elements.email.value;
    formData.message = inputEl.elements.message.value;
};
btnSubmit.addEventListener('submit', (e) => {
    e.preventDefault();
    if (formData.email === '' ?? formData.message === '') {
         alert('Fill please all fields');
    } else {
        console.log(formData.email, formData.message);
        localStorage.clear();
        formData.email = '';
        formData.message = '';
        inputEl.value = '';
        areaEl.value = '';

    }
    
});