import restaurant from './images/restaurant';

export default function homeLoad() {
    const mainContent = document.querySelector('#main_content');

    const imageContainer = document.createElement('div');
    imageContainer.id = 'image_container';
    mainContent.appendChild(imageContainer);
  
    // const restaurantImage = document.createElement('img');
    restaurant.src = '/src/images/restaurant.jpg';
    restaurant.id = 'restaurant_image';
    imageContainer.appendChild(restaurantImage);

    restaurant.style.width = '100vw';
    restaurant.style.height = '92vh';
    restaurant.style.objectFit = 'cover';
  };