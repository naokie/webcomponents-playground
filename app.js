import { html, render } from './node_modules/lit-html/lit-html.js';

const greeting = (name) => {
  return html`
    <p>Hello, ${name}</p>
  `;
};

const el = document.querySelector('#app');

render(greeting('John'), el);
