import './movie-box.js';

class MovieList extends HTMLElement {

  constructor() {
    super();
    this.shadowDOM = this.attachShadow({mode: 'open'});
  }

  set movies(movies) {
    this._movies = movies;
    this.render();
  }

  render() {
    this.shadowDOM.innerHTML = '';

    this._movies.forEach(movie => {
      const movieBoxElement = document.createElement('movie-box');
      movieBoxElement.movie = movie;
      this.shadowDOM.appendChild(movieBoxElement);
    });
  }

  renderError(error) {
    this.shadowDOM.innerHTML = `
      <style>
        .error {
          font-weight: lighter;
          color: white;
          -webkit-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
          user-select: none;
        }
      </style>
    `;

    this.shadowDOM.innerHTML += `<h2 class="error">Movie ${error}</h2>`;
  }
}

customElements.define('movie-list', MovieList);
