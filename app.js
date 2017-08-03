class Counter extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.createShadowRoot();
    this._count = 0;
  }

  connectedCallback() {
    console.log('connected');

    const template = `
      <div>${this._count}</div>
    `;

    this.shadow.innerHTML = template;
  }
}

customElements.define('my-counter', Counter);
