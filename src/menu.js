function loadMenu() {
    const mainContainer = document.getElementById('content');

    // Header
    const menuHeader = document.createElement('h1');
    menuHeader.textContent = 'Menu';

    // Beverages Title
    const beveragesTitle = document.createElement('h2');
    beveragesTitle.textContent = "Beverages";

    // Honey Tea
    const honeyTeaContainer = document.createElement('div');
    const honeyTeaTitle = document.createElement('h3');
    const honeyTeaDesc = document.createElement('p');
    const honeyTeaPrice = document.createElement('p');
    
    honeyTeaTitle.textContent = 'Honey Tea';
    honeyTeaDesc.textContent = 'A warm, sweet tea made with the highest quality honey and a bit of lemon to start your day off right!';
    honeyTeaPrice.textContent = '$2';

    honeyTeaContainer.appendChild(honeyTeaTitle);
    honeyTeaContainer.appendChild(honeyTeaDesc);
    honeyTeaContainer.appendChild(honeyTeaPrice);

    // Berry Tea
    const berryTeaContainer = document.createElement('div');
    const berryTeaTitle = document.createElement('h3');
    const berryTeaDesc = document.createElement('p');
    const berryTeaPrice = document.createElement('p');
    
    berryTeaTitle.textContent = 'berry Tea';
    berryTeaDesc.textContent = 'A comforting, almost filling, tea that is infused with the flavors of several kinds of berries. Best served cold, but can be served hot on request.';
    berryTeaPrice.textContent = '$3';

    honeyTeaContainer.appendChild(berryTeaTitle);
    honeyTeaContainer.appendChild(berryTeaDesc);
    honeyTeaContainer.appendChild(berryTeaPrice);

    mainContainer.appendChild(menuHeader);
    mainContainer.appendChild(beveragesTitle);
    mainContainer.appendChild(honeyTeaContainer);
    mainContainer.appendChild(berryTeaContainer);
}

export { loadMenu };