class popular extends HTMLElement {

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
          .popular-tag > button {
            width: 100%;
            cursor: pointer;
            padding: 16px;
            background-color: #db0000;
            color: white;
            border: 0;
            font-size: 16px;
            text-transform: uppercase;
          }
          
          @media screen and (max-width: 981px){
            .popular-tag > button {
              {
              flex-direction: column;
            }
       
            .popular-tag > input {
              width: 100%;
            }
       
            .popular-tag > button {
              width: 100%;
            }
          }
  
          @media screen and (max-width: 550px){
            .popular-tag {
              width: 100%;
            }
          }

          @media screen and (max-width: 497px){
            .popular-tag {
              text-align: center;
              width: 100%;
            }
            .popular-tag > button {
              width: 85%;
          }
        </style>
        
        <div class="popular-tag">
          <button id="popularTagElement" type="submit">Popular Movies</button>
        </div>
      `;
  
      this.shadowDOM.querySelector('#popularTagElement').addEventListener('click', this._clickEvent);
    }
  
    set clickEvent(event) {
      this._clickEvent = event;
      this.render();
    }
  }
  
  customElements.define('popular-tag', popular);
  