class DataSourceSearch {
  static searchMovie(keyword) {
    const api_key = 'api_key=1cf50e6248dc270629e802686245c2c8';
    const url = 'https://api.themoviedb.org/3';
    const query = '&query';
    return fetch(`${url}/search/movie?${api_key}${query}=${keyword}`)
        .then(response => {
          return response.json();
        })
        .then(responseJson => {
          if (responseJson.results) {
            return Promise.resolve(responseJson.results);
          } else {
            return Promise.reject(`${keyword} is not found`);
          }
        });
  }
}
 
export default DataSourceSearch;