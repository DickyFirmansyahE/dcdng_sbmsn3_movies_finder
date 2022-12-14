class SearchBar extends HTMLElement {

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
        .search-movie {
            display: flex;
            position: relative;
            justify-content: center;
            width: -webkit-min-content;
            width: -moz-min-content;
            width: 65%;
            margin: 30px auto;
            background-color: #564d4d;
        }
       
        .search-movie > input {
          width: 75%;
          padding: 16px;
          background-color: #564d4d;
          border: 0;
          border-bottom: 1px solid #db0000;
          font-weight: bold;
          font-size: 16px;
          color: white;
        }
       
        .search-movie > input:focus {
          outline: 0;
          border-bottom: 2px solid #db0000;
          color: white;
        }
       
        .search-movie > input:focus::placeholder {
          font-weight: bold;
        }
        
        .search-movie >  input::placeholder {
          color: white;
          font-weight: normal;
        }
       
        .search-movie > button {
          width: 23%;
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
          .search-movie {
            flex-direction: column;
          }
     
          .search-movie > input {
            width: 100%;
          }
     
          .search-movie > button {
            width: 100%;
          }
        }

        @media screen and (max-width: 550px){
          .search-movie {
            width: 85%;
          }
        }
      </style>
      
      <div class="search-movie">
        <input placeholder="Search Movie" id="searchMovie" type="search">
        <button id="searchMovieElement" type="submit">Search</button>
      </div>
    `;

    this.shadowDOM.querySelector('#searchMovieElement').addEventListener('click', this._clickEvent);
  }

  set clickEvent(event) {
    this._clickEvent = event;
    this.render();
  }


  get value() {
    return this.shadowDOM.querySelector('#searchMovie').value;
  }
}

customElements.define('search-bar', SearchBar);
