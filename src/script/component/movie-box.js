class Movies extends HTMLElement {

  
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({mode: 'open'});
  }

  set movie(movie) {
    this._movie = movie;
    this.render();
  }

  render() {
    const poster_url = 'https://image.tmdb.org/t/p/w500';
    this.shadowDOM.innerHTML = `
      <style>
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        :host {
          display: flex;
          margin-bottom: 18px;
          background-color:	#564d4d;
          box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
          color: white;
          border: 2px solid #831010;
          border-radius: 10px;
          overflow: hidden;
        }        
        .poster {
          max-width: 200px;
          object-fit: cover;
          object-position: center;
        }
        
        .movie-box {
          padding: 24px;
          width: 100%;
        }

        .movie-box > .rate {
          width: 100%;
          display: flex; 
          justify-content: space-between;
        }
        
        .movie-box > .rate > .movie-title {
          width: 100%;
          font-size: 30px;
          font-weight: bold;
        }

        .movie-box > .rate > .movie-rate {
          font-size: 30px;
          font-weight: bold;
        }

        .movie-box > .rate > span.green{
          color:lightgreen;
        }
      
        .movie-box > .rate > span.orange{
          color:orange;
        }
      
        .movie-box > .rate > span.red{
          color:red;
        }
        
        .movie-box > p {
          margin-top: 10px;
          overflow: hidden;
          text-overflow: ellipsis;
          text-align: justify;
          display: -webkit-box;
          -webkit-box-orient: vertical;
        }
        @media screen and (max-width: 628px){
          :host {
            display: flex;
            flex-direction: column;
            margin-bottom: 18px;
            background-color: #564d4d;
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
            color: white;
            border: 2px solid #831010;
            border-radius: 10px;
          }
          .poster {
            max-width: 100%;
            max-height: 500px;
            object-fit: cover;
            object-position: center;
          }
        }
      </style>
      
      <img class="poster" src="${poster_url}${this._movie.poster_path}" alt="${this._movie.title}">
      <div class="movie-box">
      <div class="rate">
        <p class="movie-title">${this._movie.title}</p>
        <span class="movie-rate ${rateColor(this._movie.vote_average)}">${this._movie.vote_average}</span>
      </div>
        <p>Release Date : ${this._movie.release_date}</p>
        <p>Language     : ${this._movie.original_language}</p>
        <p>${this._movie.overview}</p>
      </div>
    `;
  }
}

function rateColor(vote) {
  if(vote>= 8){
      return 'green'
  }else if(vote >= 5){
      return "orange"
  }else{
      return 'red'
  }
}

customElements.define('movie-box', Movies);
