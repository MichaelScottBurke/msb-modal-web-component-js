class Modal extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.isOpen = false;
    this.shadowRoot.innerHTML = `
    <style>
    :host {
      --msb_ref_elevation_08: 0 14px 42px #0000001c, 0 0 29px #00000014;
      display: none;
      flex-direction: row;
      flex-wrap: nowrap;
      justify-content: center;
      align-content: flex-start;
      align-items: center;
      position: fixed;
      width: 100%;
      top: 0;
      left: 0;
      height: 100vh;
    }
  
    * {
      box-sizing: border-box;
    }
  
    .msb-scrim {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100vh;
      background: rgba(0, 0, 0, 0.5);
      z-index: 10;
    }
  
    .msb-modal {
      z-index: 100;
      width: 75%;
      max-width: calc(600px + 2rem);
      min-width: 320px;
      background: white;
      border-radius: 12px;
      box-shadow: var(--msb_ref_elevation_08);
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
  
    .msb-modal-header,
    .msb-modal-content,
    .msb-modal-footer {
      padding: 1rem;
    }
  
    .msb-modal-header {
      border-bottom: 1px solid rgba(0, 0, 0, 0.15);
    }
  
    .msb-modal-header-title {
      margin: 0;
    }
  
    .msb-modal-header-subtitle {
      margin: 0;
    }
  
    .msb-modal-content {
      overflow-y: auto;
    }
  
    .msb-modal-footer {
      width: 100%;
      border-top: 1px solid rgba(0, 0, 0, 0.15);
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: flex-end;
    }
  
    /* show and hide dialog based on opened attribute */
    :host([opened]) {
      display: flex;
    }
  
    :host:not([opened]) {
      display: none;
    }
  </style>
  <div id="msb-modal-scrim" class="msb-scrim"></div>
  <div class="msb-modal">
    <div class="msb-modal-header">
      <h2 class="msb-modal-header-title">Modal title</h2>
      <p class="msb-modal-header-title">Modal subtitle</p>
      <slot name="header-end"></slot>
    </div>
    <div class="msb-modal-content">
      <slot></slot>
    </div>
    <div class="msb-modal-footer">
    <div class="msb-footer-slot-start">
      <slot name="footer-start"></slot>
    </div>
    <div class="msb-footer-slot-end">
      <msb-button id='btn-cancel-modal' size='medium' emphasis='mid'>Cancel</msb-button>
      <msb-button id='btn-confirm-modal' size='medium' emphasis='high'>OK</msb-button>
    </div>
  </div>
  </div>
    `;
    const btnModalCancel = this.shadowRoot.getElementById('btn-cancel-modal');
    const btnModalConfirm = this.shadowRoot.getElementById('btn-confirm-modal');
    btnModalCancel.addEventListener('click', this._cancel.bind(this));
    btnModalConfirm.addEventListener('click', this._confirm.bind(this));
  }
  attributeChangedCallback(name, oldValue, newValue) {
    if (this.hasAttribute('opened')) {
      this.isOpen = true;
    } else {
      this.isOpen = false;
    }
  }
  //if using attributeChangedCallback need to get observedAttributes
  static get observedAttributes() {
    return ['opened'];
  }

  //change 'opened' attribute w methods
  openModal() {
    this.setAttribute('opened', '');
    this.isOpen;
    console.log(this.isOpen);
  }
  closeModal() {
    if (this.hasAttribute('opened')) {
      this.removeAttribute('opened');
      console.log(this.isOpen);
    }
    this.isOpen = false;
  }
  _cancel() {
    this.closeModal();
  }
  _confirm() {
    this.closeModal();
  }
}
customElements.define('msb-modal', Modal);
export default Modal;
