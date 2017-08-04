class Counter extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.createShadowRoot();
    this._count = 0;
  }

  connectedCallback() {
    console.log('connected');

    this.render();
  }

  render() {
    const template = `
      <div>${this._count}</div>
      <div>
        <button>+</button>
      </div>
    `;

    this.shadow.innerHTML = template;

    const incrementButton = this.shadow.querySelector('button');
    incrementButton.addEventListener('click', () => {
      this._count += 1;
      this.render();
    });
  }
}

customElements.define('my-counter', Counter);
