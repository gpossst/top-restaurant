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

    cardContainer.style.width = '100%';
    cardContainer.style.height = '100%';
    cardContainer.style.display = 'grid';
    cardContainer.style.gridTemplate = '1fr / 1fr 1fr 1fr';
    cardContainer.style.alignItems = 'center';
    cardContainer.style.justifyContent = 'center';

    appCard.style.display = 'flex';
    appCard.style.justifyContent = 'center';
    entreeCard.style.display = 'flex';
    entreeCard.style.justifyContent = 'center';
    dessertCard.style.display = 'flex';
    dessertCard.style.justifyContent = 'center';

    appList.style.display = 'flex';
    appList.style.flexDirection = 'column';
    appList.style.alignItems = 'center';
    appList.style.gap = '30px';
    appList.style.border = 'solid 2px goldenrod';
    appList.style.borderRadius = '3%'
    appList.style.height = '280px';
    appList.style.width = '28vw';

    entreeList.style.display = 'flex';
    entreeList.style.flexDirection = 'column';
    entreeList.style.alignItems = 'center';
    entreeList.style.gap = '30px';
    entreeList.style.border = 'solid 2px goldenrod';
    entreeList.style.borderRadius = '3%'
    entreeList.style.height = '280px';
    entreeList.style.width = '28vw';

    dessertList.style.display = 'flex';
    dessertList.style.flexDirection = 'column';
    dessertList.style.alignItems = 'center';
    dessertList.style.gap = '30px';
    dessertList.style.border = 'solid 2px goldenrod';
    dessertList.style.borderRadius = '3%'
    dessertList.style.height = '280px';
    dessertList.style.width = '28vw';

    appHead.style.color = 'white';
    appHead.style.fontSize = '30px';
    appHead.style.marginTop = '24px';
    entHead.style.color = 'white';
    entHead.style.fontSize = '30px';
    entHead.style.marginTop = '24px';
    desHead.style.color = 'white';
    desHead.style.fontSize = '30px';
    desHead.style.marginTop = '24px';
    
    const menu = document.querySelectorAll('.menu_item');
    menu.forEach(item => {
      item.style.color = 'white';
    })
  };