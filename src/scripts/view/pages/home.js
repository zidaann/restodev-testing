import RestaurantDbSource from '../../data/restaurantdb-source';
import { card } from '../templates/template-creator';

const Home = {
  async render() {
    return `
        <section class="content">
          <h1 tabindex="0">Daftar Restaurant</h1>
          <div class="posts" id="posts">
          </div>  
        </section>
        `;
  },

  async afterRender() {
    const restaurants = await RestaurantDbSource.home();
    const restaurantContainer = document.querySelector('#posts');

    restaurants.forEach((restaurant) => {
      restaurantContainer.innerHTML += card(restaurant);
    });
  },
};

export default Home;
