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
  }