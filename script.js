// Create a chat button
const chatButton = document.createElement('div');
chatButton.id = 'chat-button';
chatButton.textContent = 'Chat';
chatButton.style.position = 'fixed';
chatButton.style.bottom = '20px';
chatButton.style.right = '20px';
chatButton.style.backgroundColor = '#007bff';
chatButton.style.color = 'white';
chatButton.style.padding = '10px 20px';
chatButton.style.border = 'none';
chatButton.style.borderRadius = '5px';
chatButton.style.cursor = 'pointer';
chatButton.style.zIndex = '1000';

document.body.appendChild(chatButton);

// Create the chat container
const chatContainer = document.createElement('div');
chatContainer.id = 'chat-container';
chatContainer.style.position = 'fixed';
chatContainer.style.bottom = '80px';
chatContainer.style.right = '20px';
chatContainer.style.backgroundColor = 'white';
chatContainer.style.border = '1px solid #ccc';
chatContainer.style.borderRadius = '5px';
chatContainer.style.zIndex = '999';
chatContainer.style.display = 'none';

// Create the chat form
const chatForm = document.createElement('div');
chatForm.id = 'chat-form';
chatForm.style.padding = '20px';

// Create input fields
const nameInput = createInput('text', 'Name', true);
const emailInput = createInput('email', 'Email', true);
const phoneInput = createInput('tel', 'Phone', true);

// Create the submit button
const submitButton = document.createElement('button');
submitButton.id = 'submit';
submitButton.textContent = 'Submit';
submitButton.disabled = true;
submitButton.style.backgroundColor = '#007bff';
submitButton.style.color = 'white';
submitButton.style.padding = '10px 20px';
submitButton.style.border = 'none';
submitButton.style.borderRadius = '5px';
submitButton.style.cursor = 'pointer';

chatForm.appendChild(nameInput);
chatForm.appendChild(emailInput);
chatForm.appendChild(phoneInput);
chatForm.appendChild(submitButton);

chatContainer.appendChild(chatForm);
document.body.appendChild(chatContainer);

// Toggle the chat form on chat button click
chatButton.addEventListener('click', () => {
    chatContainer.style.display = chatContainer.style.display === 'none' ? 'block' : 'none';
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
    input.style.marginBottom = '10px';
    input.style.width = '100%';
    input.style.padding = '10px';
    input.style.border = '1px solid #ccc';
    input.style.borderRadius = '5px';
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
