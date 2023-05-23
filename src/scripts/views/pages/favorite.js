// import { card } from '../templates/template-creator';
import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import FavoriteRestaurantShowPresenter from './bookmark-restaurants/favorite-restaurant-show-presenter';
import FavoriteRestaurantSearchPresenter from './bookmark-restaurants/favorite-restaurant-search-presenter';
import FavoriteRestaurantSearchView from './bookmark-restaurants/favorite-restaurant-search-view';

const view = new FavoriteRestaurantSearchView();

const Favorite = {
  async render() {
    return view.getTemplate();
  },

  async afterRender() {
    // const restaurants = await FavoriteRestaurantIdb.getAllRestaurants();
    // const restaurantContainer = document.querySelector('#posts');
    // restaurants.forEach((restaurant) => {
    //   restaurantContainer.innerHTML += card(restaurant);
    // });
    new FavoriteRestaurantShowPresenter({ view, favoriteRestaurants: FavoriteRestaurantIdb });
    new FavoriteRestaurantSearchPresenter({ view, favoriteRestaurants: FavoriteRestaurantIdb });
    document.querySelector('app-bar').style.display = 'none';
  },
};

export default Favorite;
