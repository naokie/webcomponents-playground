class Counter extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    console.log('connected');
  }
}

customElements.define('counter', Counter);
