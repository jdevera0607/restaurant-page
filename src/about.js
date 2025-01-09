export function aboutItem(){
    const container = document.querySelector('.container');
    container.innerHTML = '';

    const aboutContainer = document.createElement('DIV');
    container.append(aboutContainer);

    const aboutTitle = document.createElement('h2');
    const aboutUs = document.createElement('p')
    aboutTitle.textContent = 'About us';
    aboutUs.textContent = 'We are a local business, proudly serving the Gainesville, FL community!';

    aboutContainer.append(aboutTitle);
    aboutContainer.append(aboutUs);
}