import {LitElement, html, css} from 'lit';
import {customElement} from 'lit/decorators.js';

@customElement('lit-component')
class LitComponent extends LitElement {
  static styles = css`
    h2 {
      color: red;
    }
    .lit-container {
      padding-top: 15px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }

    .lit-h1 {
      font-size: 4rem;
      font-weight: 100;
      font-family: inherit;
      color: #476af5;
      text-transform: uppercase;
    }

    .lit-h2 {
      font-size: 2.5rem;
      font-weight: 100;
    }
  `;

  static get properties() {
    return {
      userData: {reflect: true},
    };
  }

  constructor() {
    super();
  }

  render() {
    return html`
      <div class="lit-container">
        <h1 class="lit-h1">Hello ${this.userData}</h1>
        <h2 class="lit-h2">This is a Lit Web Component</h2>
      </div>
    `;
  }
}
