import './style.css';
import { Button } from './button.js';
import { Modal } from './modal.js';
console.log(Button, Modal);

const btnOpenModal = document.getElementById('btn-open-modal');
const modal = document.querySelector('msb-modal');
//const btnModalCancel = document.shadowRoot.getElementById('btn-cancel-modal');

btnOpenModal.addEventListener('click', () => {
  if (!modal.isOpen) {
    modal.openModal();
  }
});

// modal.addEventListener('cancel', () => {
//   console.log('cancelled...');
// });
