export default function menuLoad() {
    const mainContent = document.querySelector('#main_content');
  
    const cardContainer = document.createElement('div');
    cardContainer.id = 'card_container';
    mainContent.appendChild(cardContainer);
  
    // create cards for menu sections
    const appCard = document.createElement('div');
    appCard.id = 'app_card';
    cardContainer.appendChild(appCard);
  
    const entreeCard = document.createElement('div');
    entreeCard.id = 'entree_card';
    cardContainer.appendChild(entreeCard);
  
    const dessertCard = document.createElement('div');
    dessertCard.id = 'dessert_card';
    cardContainer.appendChild(dessertCard);
  
    // create lists for cards
    const appList = document.createElement('ul');
    appList.id = 'app_list';
    appCard.appendChild(appList);
  
    const entreeList = document.createElement('ul');
    entreeList.id = 'entree_list';
    entreeCard.appendChild(entreeList);
  
    const dessertList = document.createElement('ul');
    dessertList.id = 'dessert_list';
    dessertCard.appendChild(dessertList);
  
    const appHead = document.createElement('li');
    appHead.textContent = 'Appetizers';
    appHead.id = 'app_head';
    appHead.classList.add('menu_card');
    appList.appendChild(appHead);
  
    const entHead = document.createElement('li');
    entHead.textContent = 'Entrées';
    entHead.id = 'ent_head';
    entHead.classList.add('menu_card');
    entreeList.appendChild(entHead);
  
    const desHead = document.createElement('li');
    desHead.textContent = 'Desserts';
    desHead.id = 'des_head';
    desHead.classList.add('menu_card');
    dessertList.appendChild(desHead);
  
    for (let i = 0; i < 4; i++){
      const appetizer = document.createElement('li');
      appetizer.classList.add('menu_item');
      appetizer.textContent = 'Nondescript Appetizer';
      appList.appendChild(appetizer);
    }
  
    for (let i = 0; i < 4; i++){
      const entree = document.createElement('li');
      entree.classList.add('menu_item');
      entree.textContent = 'Random Entrée';
      entreeList.appendChild(entree);
    }
  
    for (let i = 0; i < 4; i++){
      const dessert = document.createElement('li');
      dessert.classList.add('menu_item');
      dessert.textContent = 'Arbitrary Dessert';
      dessertList.appendChild(dessert);
    }
  };