const formData = {
    email: "",
    message: "",
};
const inputEl = document.querySelector('.feedback-form');
const btnSubmit = document.querySelector('.btn-submit');
const areaEl = document.querySelector('.textarea-form');
inputEl.addEventListener('input', (e) => {
    formData.email = inputEl.elements.email.value.trim();
    formData.message = inputEl.elements.message.value.trim();
    const zip = JSON.stringify(formData);
    localStorage.setItem('feedback-form-state', zip);
});
const parseData = JSON.parse(localStorage.getItem('feedback-form-state'))
if (parseData !== '' ) {
    inputEl.elements.email.value = parseData.email;
    inputEl.elements.message.value = parseData.message;
    formData.email = inputEl.elements.email.value;
    formData.message = inputEl.elements.message.value;
};
inputEl.addEventListener('submit', (e) => {
    e.preventDefault();
    if (formData.email === '' || formData.message === '') {
        alert('Fill please all fields');
        return;
    } else {
        console.log(formData);

    } 
    inputEl.reset();
        formData.email = '';
        formData.message = '';
    localStorage.removeItem('feedback-form-state');
});