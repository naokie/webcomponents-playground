class Counter extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this._count = 0;
  }

  connectedCallback() {
    console.log('connected');

    this.render();
  }

  render() {
    const template = `
      <style>
      button {
        padding: 0.5em 1em;
        border: none;
        border-radius: 4px;
        background-color: #000;
        color: #fff;
      }
      </style>
      <div>${this._count}</div>
      <div>
        <button>
          <slot name="label" />
        </button>
      </div>
    `;

    this.shadowRoot.innerHTML = template;

    const incrementButton = this.shadowRoot.querySelector('button');
    incrementButton.addEventListener('click', () => {
      this._count += 1;
      this.render();
    });
  }
}

customElements.define('my-counter', Counter);
