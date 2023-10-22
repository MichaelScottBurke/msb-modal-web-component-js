class Button extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
      :host {
        --msb_sys_color_action_active: #004e73;
        --msb_sys_color_action_enabled: #0176b2;
        --msb_sys_color_action_hover: #005c89;
        --msb-button-border-radius: 24px;
        --msb-hover-on-light: rgba(0, 0, 0, 0.05);
      }
      
      .msb-button {
        font-family: font-family: 'Noto Sans Display', sans-serif;
        -webkit-appearance: none;
        -moz-appearance: none;
        border: none;
        margin: 0;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        cursor: pointer;
        padding: 0.5rem 0.85rem;
        border-radius: var(--msb-button-border-radius);
        transition: background 250ms ease-in-out, transform 150ms ease;
        margin-bottom: 0.5rem;
        background-color: transparent;
      }
      .msb-button:focus {
        outline: none;
        box-shadow: 0px 0px 0px 2px white,
          0px 0px 0px 5px var(--msb_sys_color_action_enabled);
      }
      .msb-button:active {
        transform: scale(0.96);
        box-shadow: none;
      }
      /* size */
      .msb-button[size='large'] {
        font-size: 1.15rem;
        padding: 0.75rem 1.25rem;
        min-height: 3rem;
        min-width: 6.5rem;
      }
      .msb-button[size='medium'] {
        font-size: 1rem;
        padding: 0.325rem 0.875rem;
        min-height: 2.25rem;
        min-width: 5.5rem;
      }
      .msb-button[size='small'] {
        font-size: 0.85rem;
        padding: 0.45rem 0.65rem;
        min-height: 2rem;
        min-width: 5rem;
      }
      /* emphasis */
      .msb-button[emphasis='high'] {
        background-color: var(--msb_sys_color_action_enabled);
        color: white;
      }
      .msb-button[emphasis='high']:hover {
        background-color: var(--msb_sys_color_action_hover);
      }
      .msb-button[emphasis='high']:active {
        box-shadow: none;
        background-color: var(--msb_sys_color_action_active);
      }
      .msb-button[emphasis='mid'] {
        border: 1px solid var(--msb_sys_color_action_enabled);
        color: var(--msb_sys_color_action_enabled);
      }
      .msb-button[emphasis='mid']:hover {
        background-color: var(--msb-hover-on-light);
        border: 1px solid var(--msb_sys_color_action_enabled);
        color: var(--msb_sys_color_action_enabled);
      }
      .msb-button[emphasis='mid']:active {
        border: 1px solid var(--msb_sys_color_action_enabled);
        color: var(--msb_sys_color_action_enabled);
      }
      .msb-button[emphasis='low'] {
        color: var(--msb_sys_color_action_enabled);
      }
      .msb-button[emphasis='low']:hover {
        background-color: var(--msb-hover-on-light);
        color: var(--msb_sys_color_action_enabled);
      }
      .msb-button[emphasis='low']:active {
        color: var(--msb_sys_color_action_enabled);
      }      
      </style>
      <button emphasis='mid' size='medium' class='msb-button'>
      <div class='icon-start'><slot name='icon-start'></slot></div>
      <div class='button-label'><slot></slot></div>
      <div class='icon-end'><slot name='icon-end'></slot></div>
      </button>
    `;
  }
}
customElements.define('msb-button', Button);
export default Button;
