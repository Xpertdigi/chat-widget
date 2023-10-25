const chatButton = document.createElement('div');
chatButton.id = 'chat-button';
chatButton.classList.add('widget-button');
chatButton.textContent = 'Chat';
document.body.appendChild(chatButton);

const chatForm = document.createElement('div');
chatForm.id = 'chat-form';
chatForm.classList.add('widget-form');

const nameInput = createInput('text', 'Name', true);
const emailInput = createInput('email', 'Email', true);
const phoneInput = createInput('tel', 'Phone', true);

const submitButton = document.createElement('button');
submitButton.id = 'submit';
submitButton.textContent = 'Submit';
submitButton.disabled = true;

chatForm.appendChild(nameInput);
chatForm.appendChild(emailInput);
chatForm.appendChild(phoneInput);
chatForm.appendChild(submitButton);

document.body.appendChild(chatForm);

chatButton.addEventListener('click', () => {
    chatForm.classList.toggle('widget-open');
});

function createInput(type, placeholder, required) {
    const input = document.createElement('input');
    input.type = type;
    input.placeholder = placeholder;
    if (required) {
        input.required = true;
    }
    input.addEventListener('input', toggleSubmitButton);
    return input;
}

function toggleSubmitButton() {
    if (nameInput.value && emailInput.value && phoneInput.value) {
        submitButton.disabled = false;
    } else {
        submitButton.disabled = true;
    }
}
