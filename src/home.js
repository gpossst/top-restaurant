export default function homeLoad() {
    const mainContent = document.querySelector('#main_content');
  
    const imageContainer = document.createElement('div');
    imageContainer.id = 'image_container';
    mainContent.appendChild(imageContainer);
  
    const restaurantImage = document.createElement('img');
    restaurantImage.src = '/src/images/restaurant.jpg';
    restaurantImage.id = 'restaurant_image';
    imageContainer.appendChild(restaurantImage);

    restaurantImage.style.width = '100vw';
    restaurantImage.style.height = '92vh';
    restaurantImage.style.objectFit = 'cover';
  };