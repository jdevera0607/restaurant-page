export function homeItem(){
    const container = document.querySelector('.container')
    container.innerHTML = '';
    
    const welcomeMessage = document.createElement('H2');
    welcomeMessage.textContent = "Welcome to the Jade restaurant";
    container.appendChild(welcomeMessage);
}