class Counter extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.createShadowRoot();
  }

  connectedCallback() {
    console.log('connected');

    const template = `
      <div>123</div>
    `;

    this.shadow.innerHTML = template;
  }
}

customElements.define('my-counter', Counter);
