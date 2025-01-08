export function contactItem(){
    const container = document.querySelector('.container');
    container.innerHTML = '';
    
    const createContact = function(name, phone, job){

        const contactContainer = document.createElement('DIV');
        container.appendChild(contactContainer)
        const contactInfo = document.createElement('UL');
        const contactName = document.createElement('LI');
        const contactPhone = document.createElement('LI');
        const contactJob = document.createElement('LI');

        contactName.textContent = name;
        contactPhone.textContent = phone;
        contactJob.textContent = job;

        contactContainer.append(contactInfo);
        contactInfo.append(contactName);
        contactInfo.append(contactPhone);
        contactInfo.append(contactJob);
    }
    createContact('Jade De Vera', '954-000-000', 'Owner')
}