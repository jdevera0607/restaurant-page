export function menuItem(){
    const container = document.querySelector('.container');
    container.innerHTML = '';

    const displayItems = function(item, description, price){
       
        const menuContainer = document.createElement('UL');
        menuContainer.classList.add('menu');
        
        const menuItem = document.createElement('LI');
        const itemDesc = document.createElement('LI');
        const itemPrice = document.createElement('LI');

        menuItem.textContent = item;
        itemDesc.textContent = description;
        itemPrice.textContent = price;

        menuContainer.append(menuItem);
        menuContainer.append(itemDesc);
        menuContainer.append(itemPrice);
        container.append(menuContainer);
    }
    const friedChicken1 = displayItems("Fried Chicken", "Crispy and juicy, fried until golden brown. Comes in dark or white meat and 2 sides.", "$10.99");
    const friedChicken3 = displayItems("Fried Chicken", "Crispy and juicy, fried until golden brown. Comes in dark or white meat and 2 sides.", "$10.99");
}