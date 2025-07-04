let contactsList = [];
let idCount = 0;

const addContactButton = document.getElementById('addContactButton');
const contactNameInput = document.getElementById('nameInput');
const contactPhoneInput = document.getElementById('phoneInput');

addContactButton.addEventListener('click', () => {
    const contactName = contactNameInput.value.trim();
    const contactPhone = contactPhoneInput.value.trim();
    
    if (contactName && contactPhone) {
        contactsList.push({ id: idCount, name: contactName, phone: contactPhone });
        idCount++;
        contactNameInput.value = '';
        contactPhoneInput.value = '';
        renderContacts();
    } else {
        alert("Por favor, introduce tanto el nombre como el número de teléfono.");
    }
});

function renderContacts() {
    const contactsContainer = document.getElementById('contactList');
    contactsContainer.innerHTML = '';
    contactsList.forEach((contact) => {
        const contactElement = document.createElement('div');
        contactElement.innerHTML = `<li> ${contact.name} - ${contact.phone} <button onclick="deleteContact(${contact.id})">Eliminar</button></li>`;
        contactsContainer.appendChild(contactElement);
    });
}

function deleteContact(id) {
    contactsList = contactsList.filter(contact => contact.id !== id);
    renderContacts();
}
