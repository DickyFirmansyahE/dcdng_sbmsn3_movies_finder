class topRated extends HTMLElement {

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
          .top-tag > button {
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
            .top-tag {
              flex-direction: column;
            }
       
            .top-tag > input {
              width: 100%;
            }
       
            .top-tag > button {
              width: 100%;
            }
          }
  
          @media screen and (max-width: 550px){
            .top-tag {
              width: 100%;
            }
          }

          @media screen and (max-width: 497px){
            .top-tag {
              text-align: center;
              width: 100%;
            }
            .top-tag > button {
              width: 85%;
          }
        </style>
        
        <div class="top-tag">
          <button id="topTagElement" type="submit">Top Rated Movies</button>
        </div>
      `;
  
      this.shadowDOM.querySelector('#topTagElement').addEventListener('click', this._clickEvent);
    }
  
    set clickEvent(event) {
      this._clickEvent = event;
      this.render();
    }
  }
  
  customElements.define('top-tag', topRated);
  