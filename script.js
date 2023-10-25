// Create a chat button
const chatButton = document.createElement('div');
chatButton.id = 'chat-button';
chatButton.classList.add('widget-button');
chatButton.textContent = 'Chat';

// Style the chat button
chatButton.style.position = 'fixed';
chatButton.style.bottom = '20px';
chatButton.style.right = '20px';
chatButton.style.backgroundColor = '#007bff';
chatButton.style.color = 'white';
chatButton.style.padding = '10px 20px';
chatButton.style.border = 'none';
chatButton.style.borderRadius = '5px';
chatButton.style.cursor = 'pointer';

document.body.appendChild(chatButton);

// Create the chat form
const chatForm = document.createElement('div');
chatForm.id = 'chat-form';
chatForm.classList.add('widget-form');
chatForm.style.display = 'none';

// Create input fields
const nameInput = createInput('text', 'Name', true);
const emailInput = createInput('email', 'Email', true);
const phoneInput = createInput('tel', 'Phone', true);

// Create the submit button
const submitButton = document.createElement('button');
submitButton.id = 'submit';
submitButton.textContent = 'Submit';
submitButton.disabled = true;

// Style the chat form
chatForm.style.position = 'fixed';
chatForm.style.bottom = '50px';
chatForm.style.right = '20px';
chatForm.style.backgroundColor = '#fff';
chatForm.style.padding = '10px';
chatForm.style.border = '1px solid #ccc';
chatForm.style.borderRadius = '5px';

chatForm.appendChild(nameInput);
chatForm.appendChild(emailInput);
chatForm.appendChild(phoneInput);
chatForm.appendChild(submitButton);

document.body.appendChild(chatForm);

// Toggle the chat form on chat button click
chatButton.addEventListener('click', () => {
    chatForm.style.display = chatForm.style.display === 'none' ? 'block' : 'none';
});

// Function to create input fields
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

// Function to toggle the submit button
function toggleSubmitButton() {
    if (nameInput.value && emailInput.value && phoneInput.value) {
        submitButton.disabled = false;
    } else {
        submitButton.disabled = true;
    }
}
