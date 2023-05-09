function myFunction(event) {
    const nameInput = document.getElementById('name');
    const nameErrorMessage = document.getElementById('name-error-message');
    const surnameInput = document.getElementById('surname');
    const surnameErrorMessage = document.getElementById('surname-error-message');
    const emailInput = document.getElementById('email');
    const emailErrorMessage = document.getElementById('email-error-message');
    const messageInput = document.getElementById('message');
    const messageErrorMessage = document.getElementById('message-error-message');

    let isValid = true;
    if (!/^[a-zA-Z]+$/.test(nameInput.value)) {
        nameErrorMessage.style.display = 'block';
        isValid = false;
    } else {
        nameErrorMessage.style.display = 'none';
    } if (!/^[a-zA-Z]+$/.test(surnameInput.value)) {
        surnameErrorMessage.style.display = 'block';
        isValid = false;
    } else {
        surnameErrorMessage.style.display = 'none';
    }
    if (!/^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(emailInput.value)) {
        emailErrorMessage.style.display = 'block';
        isValid = false;
    } else {
        emailErrorMessage.style.display = 'none';
    }
    if (messageInput.value.length > 500) {
        messageErrorMessage.style.display = 'block';
        isValid = false;
    } else {
        messageErrorMessage.style.display = 'none';
    }
    if (isValid) {
        alert("Mesajul a fost trimis!");
    }
}
