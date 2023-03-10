import homeLoad from './home'
import menuLoad from './menu'
import contactLoad from './contact'

const pageLoad = () => {
  const body = document.querySelector('body')
  // page content
  const content = document.querySelector('#content');
  // create a container that holds all top information that will be cleared and appended
  // to when switching tabs

  const mainContent = document.createElement('div');
  mainContent.id = 'main_content';
  content.appendChild(mainContent);

  homeLoad();

  const bottomContainer = document.createElement('div');
  bottomContainer.id = 'bottom_container';
  content.append(bottomContainer);

  const bottomText = document.createElement('div');
  bottomContainer.append(bottomText);

  const restaurantHeadline = document.createElement('h1');
  bottomText.appendChild(restaurantHeadline);

  const restaurantInfo = document.createElement('div');
  bottomText.appendChild(restaurantInfo);

  const navBar = document.createElement('div');
  navBar.id = 'nav_bar';
  bottomContainer.appendChild(navBar);

  const homeBtn = document.createElement('div');
  homeBtn.classList.add('nav_item');
  homeBtn.textContent = 'Home';
  homeBtn.id = 'home_btn';
  navBar.appendChild(homeBtn);

  const menuBtn = document.createElement('div');
  menuBtn.classList.add('nav_item');
  menuBtn.textContent = 'Menu';
  menuBtn.id = 'menu_btn';
  navBar.appendChild(menuBtn);

  const contactBtn = document.createElement('div');
  contactBtn.classList.add('nav_item');
  contactBtn.textContent = 'Contact';
  contactBtn.id = 'contact_btn';
  navBar.appendChild(contactBtn);

  body.style.backgroundColor = 'black';

  mainContent.style.height = '92vh';
  mainContent.style.width = '100vw';

  bottomContainer.style.margin = '-5px 15px 0px 15px';
  bottomContainer.style.display = 'flex';
  bottomContainer.style.justifyContent = 'space-between';

  bottomText.id = 'bottom_text';
  bottomText.style.display = 'flex';
  bottomText.style.flexDirection = 'column';
  bottomText.style.justifyContent = 'center';
  bottomText.style.height = '8vh';

  restaurantHeadline.textContent = 'Charkoal: A New Take On American Cuisine';
  restaurantHeadline.id = 'restaurant_headline';
  restaurantHeadline.style.color = 'whitesmoke';
  restaurantHeadline.style.fontSize = '2vw';

  restaurantInfo.textContent = "Welcome to Charkoal, a nonexistent culinary experience. You can't find us at any specific location, but you're welcome to look!";
  restaurantInfo.id = 'restaurant_info';
  restaurantInfo.style.color = 'whitesmoke';
  restaurantInfo.style.fontSize = '1vw';

  navBar.style.display = 'flex';
  navBar.style.alignItems = 'center';
  navBar.style.justifyContent = 'flex-end';
  navBar.style.gap = '8px';

  const navigations = document.querySelectorAll('.nav_item');
  navigations.forEach(button => {
    button.style.color = 'white';
    button.style.fontSize = '20px';
    button.style.cursor = 'pointer';
  })
};

const contentClear = () => {
  const parent = document.querySelector('#main_content');
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
};

const clearColor = (which) => {
  const homeBtn = document.querySelector('#home_btn');
  const menuBtn = document.querySelector('#menu_btn');
  const contactBtn = document.querySelector('#contact_btn');

  homeBtn.classList.remove('grey');
  menuBtn.classList.remove('grey');
  contactBtn.classList.remove('grey');

  if (which == 'home') {
    homeBtn.classList.add('grey');
  } else if (which == 'menu') {
    menuBtn.classList.add('grey');
  } else if (which == 'contact') {
    contactBtn.classList.add('grey');
  }
}

const homeClick = () => {
  contentClear();
  homeLoad();
  clearColor('home');
};

const menuClick = () => {
  contentClear();
  menuLoad();
  clearColor('menu')
};

const contactClick = () => {
  contentClear();
  contactLoad();
  clearColor('contact');
}

const eventListeners = () => {
  const homeBtn = document.getElementById('home_btn');
  homeBtn.addEventListener('click', homeClick);

  const menuBtn = document.getElementById('menu_btn');
  menuBtn.addEventListener('click', menuClick);

  const contactBtn = document.getElementById('contact_btn');
  contactBtn.addEventListener('click', contactClick);
};

// on page open
pageLoad();
eventListeners();
