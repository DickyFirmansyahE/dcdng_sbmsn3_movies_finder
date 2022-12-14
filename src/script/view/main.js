import '../component/movie-list.js';
import '../component/search-bar.js';
import '../component/popular.js';
import '../component/upcoming-movies.js';
import '../component/top.js';
import DataSourceSearch from '../data/data-source-search.js';
import DataSourceTags from '../data/data-source-tags.js';

const main = () => {
  const movieListElement = document.querySelector('movie-list');
  const searchElement = document.querySelector('search-bar');
  const popularElement = document.querySelector('popular-tag');
  const upcomingElement = document.querySelector('upcoming-tag');
  const topElement = document.querySelector('top-tag');

  const onPopularTagClicked = async () => {
    try {
      const result = await DataSourceTags.populuarMovies(searchElement.value);
      renderResult(result);
    } catch (message) {
      fallbackResult(message);
    }
  };

  const onUpcomingTagClicked = async () => {
    try {
      const result = await DataSourceTags.upcomingMovies(searchElement.value);
      renderResult(result);
    } catch (message) {
      fallbackResult(message);
    }
  };

  const onTopRTagClicked = async () => {
    try {
      const result = await DataSourceTags.topMovies(searchElement.value);
      renderResult(result);
    } catch (message) {
      fallbackResult(message);
    }
  };

  const onButtonSearchClicked = async () => {
    try {
      const result = await DataSourceSearch.searchMovie(searchElement.value);
      renderResult(result);
    } catch (message) {
      fallbackResult(message);
    }
  };

  const renderResult = results => {
    movieListElement.movies = results;
  };

  const fallbackResult = message => {
    movieListElement.renderError(message);
  };
  upcomingElement.clickEvent = onUpcomingTagClicked;
  popularElement.clickEvent = onPopularTagClicked;
  topElement.clickEvent = onTopRTagClicked;
  searchElement.clickEvent = onButtonSearchClicked;
};

export default main;
