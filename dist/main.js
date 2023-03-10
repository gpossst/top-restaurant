/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ menuLoad)
/* harmony export */ });
function menuLoad() {
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

/***/ }),
/* 2 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ homeLoad)
/* harmony export */ });
function homeLoad() {
    const mainContent = document.querySelector('#main_content');
  
    const imageContainer = document.createElement('div');
    imageContainer.id = 'image_container';
    mainContent.appendChild(imageContainer);
  
    const restaurantImage = document.createElement('img');
    restaurantImage.src = '/src/images/restaurant.jpg';
    restaurantImage.id = 'restaurant_image';
    imageContainer.appendChild(restaurantImage);
  };

/***/ }),
/* 3 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ contactLoad)
/* harmony export */ });
function contactLoad() {
    const mainContent = document.querySelector('#main_content');
  
    const contactCont = document.createElement('div');
    contactCont.id = 'contact_container';
    mainContent.appendChild(contactCont)
  
    const card = document.createElement('div');
    card.id = 'contact_card';
    contactCont.appendChild(card)
  
    const contactHead = document.createElement('div');
    contactHead.id = 'contact_head';
    contactHead.textContent = 'Contact'
    card.appendChild(contactHead)
  
    for (let i = 0; i < 3; i++) {
      const contactItemLabel = document.createElement('div');
      contactItemLabel.classList.add('item_label');
      contactItemLabel.textContent = 'Method:';
      card.appendChild(contactItemLabel)
  
      const contactItem = document.createElement('div');
      contactItem.classList.add('contact_item');
      contactItem.textContent = 'Location';
      card.appendChild(contactItem);
    }
  }

/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);




const pageLoad = () => {
  // page content
  const content = document.querySelector('#content');
  // create a container that holds all top information that will be cleared and appended
  // to when switching tabs

  const mainContent = document.createElement('div');
  mainContent.id = 'main_content';
  content.appendChild(mainContent);

  (0,_home__WEBPACK_IMPORTED_MODULE_0__["default"])();

  const bottomContainer = document.createElement('div');
  bottomContainer.id = 'bottom_container';
  content.append(bottomContainer);

  const bottomText = document.createElement('div');
  bottomText.id = 'bottom_text';
  bottomContainer.append(bottomText);

  const restaurantHeadline = document.createElement('h1');
  restaurantHeadline.textContent = 'Charkoal: A New Take On American Cuisine';
  restaurantHeadline.id = 'restaurant_headline';
  bottomText.appendChild(restaurantHeadline);

  const restaurantInfo = document.createElement('div');
  restaurantInfo.textContent = "Welcome to Charkoal, a nonexistent culinary experience. You can't find us at any specific location, but you're welcome to look!";
  restaurantInfo.id = 'restaurant_info';
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
  (0,_home__WEBPACK_IMPORTED_MODULE_0__["default"])();
  clearColor('home');
};

const menuClick = () => {
  contentClear();
  (0,_menu__WEBPACK_IMPORTED_MODULE_1__["default"])();
  clearColor('menu')
};

const contactClick = () => {
  contentClear();
  (0,_contact__WEBPACK_IMPORTED_MODULE_2__["default"])();
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

})();

/******/ })()
;