import "./styles.css";
console.log("Hello World!");

const home = document.querySelector('.home');
const menu = document.querySelector('.menu');
const contact = document.querySelector('.contact');
const about = document.querySelector('.about');
const container = document.querySelector('.container');

home.textContent = "Home";
menu.textContent = "Menu";
contact.textContent = "Contact Us";
about.textContent = "About us";

async function getHome(){
    const hello = document.createElement('h2');
    hello.textContent = "Hello World!";
    return hello;
}
getHome().then((component)=> {
   container.appendChild(component);
});
async function getMenu(){
    container.removeChild(component);
    const hi = document.createElement('p');
    hi.textContent = "Hi World!";
    return hi;
}
