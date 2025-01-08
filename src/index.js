
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

const home = document.querySelector('.home');
const menu = document.querySelector('.menu');
const contact = document.querySelector('.contact');
const about = document.querySelector('.about');

home.textContent = "Home";
menu.textContent = "Menu";
contact.textContent = "Contact Us";
about.textContent = "About us";

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

}
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
// contact.addEventListener(click, contactTab());
// about.addEventListener(click, aboutTab());
