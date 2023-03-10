export default function contactLoad() {
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

    contactCont.style.display = 'flex';
    contactCont.style.alignItems = 'center';
    contactCont.style.justifyContent = 'center';
    contactCont.style.width = '100%';
    contactCont.style.height = '100%';

    card.style.border = 'solid 5px goldenrod';
    card.style.width = '18vw';
    card.style.height = '50vh';
    card.style.borderRadius = '3%';
    card.style.display = 'flex';
    card.style.flexDirection = 'column';
    card.style.alignItems = 'center';
    card.style.justifyContent = 'center';

    contactHead.style.color = 'white';
    contactHead.style.fontSize = '35px';

    const labels = document.querySelectorAll('.item_label');
    labels.forEach(label => {
      label.style.color = 'white';
      label.style.fontSize = '21px';
      label.style.marginTop = '10px';
    });

    const items = document.querySelectorAll('.contact_item');
    items.forEach(item => {
      item.style.color = 'white';
      item.style.cursor = 'pointer';
    })
  }