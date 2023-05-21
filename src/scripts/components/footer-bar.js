class FooterBar extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowDOM.innerHTML = `
          <style>
          footer {
            padding: 30px;
            color: #4f585a;
            background-color: #e6eaeb;
            text-align: center;
            font-weight: bold;
            border: 1px solid #eee;
          }
          </style>
    
            <footer tabindex="0" class="footer">
                Copyright © 2023 All Rights Reserved - restodev
            </footer>
            `;
  }
}

customElements.define('footer-bar', FooterBar);
