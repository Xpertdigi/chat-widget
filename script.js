// Create a chat container
const chatContainer = document.createElement('div');
chatContainer.id = 'chat-container';
chatContainer.style.position = 'fixed';
chatContainer.style.bottom = '20px';
chatContainer.style.right = '20px';
chatContainer.style.backgroundColor = '#007bff';
chatContainer.style.color = 'white';
chatContainer.style.padding = '10px 20px';
chatContainer.style.borderRadius = '5px';
chatContainer.style.cursor = 'pointer';
chatContainer.style.zIndex = '1000';
chatContainer.style.display = 'none';

// Create the chat button
const chatButton = document.createElement('div');
chatButton.id = 'chat-button';
chatButton.classList.add('widget-button');
chatButton.textContent = 'Chat';

chatContainer.appendChild(chatButton);
document.body.appendChild(chatContainer);

// Create the chat form
const chatForm = document.createElement('div');
chatForm.id = 'chat-form';
chatForm.style.display = 'none';
chatForm.style.position = 'fixed';
chatForm.style.bottom = '80px';
chatForm.style.right = '20px';
chatForm.style.backgroundColor = 'white';
chatForm.style.border = '1px solid #ccc';
chatForm.style.borderRadius = '5px';
chatForm.style.zIndex = '1000';
chatForm.style.padding = '20px';
chatForm.style.width = '300px';

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
