class DataSourceTags {
    static populuarMovies() {
      const api_key = 'api_key=1cf50e6248dc270629e802686245c2c8';
      const url = 'https://api.themoviedb.org/3';
      return fetch(`${url}/discover/movie?sort_by=popularity.desc&${api_key}`)
          .then(response => {
            return response.json();
          })
          .then(responseJson => {
            if (responseJson.results) {
              return Promise.resolve(responseJson.results);
            } else {
              return Promise.reject(`Movies is not found`);
            }
          });
    };

    static upcomingMovies() {
      const api_key = 'api_key=1cf50e6248dc270629e802686245c2c8';
      const url = 'https://api.themoviedb.org/3';
      return fetch(`${url}/movie/upcoming?${api_key}`)
          .then(response => {
            return response.json();
          })
          .then(responseJson => {
            if (responseJson.results) {
              return Promise.resolve(responseJson.results);
            } else {
              return Promise.reject(`Movies is not found`);
            }
          });
    };

    static topMovies() {
      const api_key = 'api_key=1cf50e6248dc270629e802686245c2c8';
      const url = 'https://api.themoviedb.org/3';
      return fetch(`${url}/movie/top_rated?${api_key}`)
          .then(response => {
            return response.json();
          })
          .then(responseJson => {
            if (responseJson.results) {
              return Promise.resolve(responseJson.results);
            } else {
              return Promise.reject(`Movies is not found`);
            }
          });
    };
  }
   
  export default DataSourceTags;