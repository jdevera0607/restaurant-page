
//This restaurant page will create a dynamic menu using a class and factory method. 
//Menu items will be encapsulated, taking arguments for item, description, and price variables.
//Menu items will be displayed on the website, allowing for easy menu item creations.
//TODO - Create menu factory
//TODO - Display new menu items
//TODO - TABBED browsing using buttons <- foundation of this page

// console.log("Hello World!");
import "./styles.css";
import { menuItem } from "./menu";
import { homeItem } from "./home";
import { contactItem } from "./contact";
import { aboutItem } from "./about";

const nav = document.querySelector('.nav-bar');

const home = document.createElement('button');
home.classList.add('home-btn')
home.textContent = 'Home';

const menu = document.createElement('button');
menu.classList.add('menu-btn')
menu.textContent = 'Menu';

const contact = document.createElement('button');
contact.classList.add('contact-btn')
contact.textContent = 'Contact Us';

const about = document.createElement('button');
about.classList.add('about-btn')
about.textContent = 'About us';

home.textContent = "Home";
menu.textContent = "Menu";
contact.textContent = "Contact Us";
about.textContent = "About us";

nav.append(home);
nav.append(menu);
nav.append(contact);
nav.append(about);

function homeTab(){
    homeItem();
}
function menuTab(){
    menuItem();
}
function contactTab(){
    contactItem();
}
function aboutTab(){
    aboutItem();
}
//I want to leave this commented out code for a future reference about async.

// async function getHome(){
//     const hello = document.createElement('h2');
//     hello.textContent = "Hello World!";
//     return hello;
// }
// getHome().then((component)=> {
//    container.appendChild(component);
// });
// async function getMenu(){
//     container.removeChild(component);
//     const hi = document.createElement('p');
//     hi.textContent = "Hi World!";
//     return hi;
// }

homeTab();
home.addEventListener('click', () => {
    homeTab();
});
menu.addEventListener('click',() => {
    menuTab();
});
contact.addEventListener('click',() => {
    contactTab();
});
about.addEventListener('click',() => {
    aboutTab();
});

