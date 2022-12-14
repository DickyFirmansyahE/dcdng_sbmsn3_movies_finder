class AppLogo extends HTMLElement {

  constructor() {
    super();
    this.shadowDOM = this.attachShadow({mode: 'open'});
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowDOM.innerHTML = `
      <style>
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        :host {
          display: block;
          width: 100%;
          color: #db0000;
          font-size: 30px;
        }
        h2 {
          padding-left: 50px;
          padding-right: 16px;
          padding-top: 20px;
          padding-bottom: 16px;
        }
      </style>
      
      <h2>Movies Finder</h2>
    `;
  }
}

customElements.define('app-logo', AppLogo);
