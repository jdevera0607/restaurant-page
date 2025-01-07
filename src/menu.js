export function MenuItem(item, description, price){
    this.item = item;
    this.description = description;
    this.price = price

    const displayItems = () => {
        const container = document.querySelector('.container');
        const menuContainer = document.createElement('UL');
        menuContainer.classList.add('menu');

        const menuItem = document.createElement('LI');
        const itemDesc = document.createElement('LI');
        const itemPrice = document.createElement('LI');

        menuItem.textContent = this.item;
        itemDesc.textContent = this.description;
        itemPrice.textContent = this.price;

        container.appendChild(menuContainer);
        menuContainer.appendChild(menuItem);
        menuContainer.appendChild(itemDesc);
        menuContainer.appendChild(itemPrice);

    }
    displayItems();
}
