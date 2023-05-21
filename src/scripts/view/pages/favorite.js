import { card } from '../templates/template-creator';
import FavoriteRestaurantDb from '../../data/favorite-restaurant-idb';

const Favorite = {
  async render() {
    return `
    <section id="query" class="content">
    <h1 tabindex="0">Favorite Restaurant</h1>
    <div class="posts" id="posts">
    </div>  
    </section>
        `;
  },

  async afterRender() {
    const restaurants = await FavoriteRestaurantDb.getAllRestaurants();
    const restaurantContainer = document.querySelector('#posts');
    restaurants.forEach((restaurant) => {
      restaurantContainer.innerHTML += card(restaurant);
    });
  },
};

export default Favorite;
