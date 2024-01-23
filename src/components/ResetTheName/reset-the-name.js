import { html, css, LitElement } from "lit";

export class ResetTheName extends LitElement {
  static properties = {
    count: { type: Number },
  };
  static styles = css`
    :host {
      display: inline-block;
      border: solid 1px gray;
      background: white;
      padding: 1em;
    }
    .resetBtn {
      color: white;
      background: gray;
      border: none;
      width: 100px;
      height: 40px;
    }
  `;

  constructor() {
    super();
    this.count = 0;
  }

  handleIncrement(e) {
    e.stopPropagation();
    this.count++;
    this.dispatchEvent(
      new Event("increment", { bubbles: true, composed: true })
    );
  }
  handleDecrement(e) {
    e.stopPropagation();
    if (this.count !== 0) {
      this.count--;
    }
    this.dispatchEvent(
      new Event("decrement", { bubbles: true, composed: true })
    );
  }
  handleReset(e) {
    e.stopPropagation();
    this.count = 0;
    this.dispatchEvent(new Event("reset", { bubbles: true, composed: true }));
  }

  render() {
    return html`
      <div>
        <p>Count : ${this.count}</p>
        <button class="resetBtn" @click=${this.handleIncrement}>
          Increment
        </button>
        <button class="resetBtn" @click=${this.handleDecrement}>
          Decrement
        </button>
        <button class="resetBtn" @click=${this.handleReset}>Reset</button>
      </div>
    `;
  }
}
customElements.define("reset-the-name", ResetTheName);
