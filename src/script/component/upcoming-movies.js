class upComing extends HTMLElement {

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
          .upcoming-tag > button {
            width: 100%;
            cursor: pointer;
            margin-left: auto;
            padding: 16px;
            background-color: #db0000;
            color: white;
            border: 0;
            font-size: 16px;
            text-transform: uppercase;
          }
          
          @media screen and (max-width: 981px){
            .upcoming-tag {
              flex-direction: column;
            }
       
            .upcoming-tag > input {
              width: 100%;
            }
       
            .upcoming-tag > button {
              width: 100%;
            }
          }
  
          @media screen and (max-width: 550px){
            .upcoming-tag {
              width: 100%;
            }
          }

          @media screen and (max-width: 497px){
            .upcoming-tag {
              text-align: center;
              width: 100%;
            }
            .upcoming-tag > button {
              width: 85%;
          }
        </style>
        
        <div class="upcoming-tag">
          <button id="upcomingTagElement" type="submit">Upcoming Movies</button>
        </div>
      `;
  
      this.shadowDOM.querySelector('#upcomingTagElement').addEventListener('click', this._clickEvent);
    }
  
    set clickEvent(event) {
      this._clickEvent = event;
      this.render();
    }
  }
  
  customElements.define('upcoming-tag', upComing);
  