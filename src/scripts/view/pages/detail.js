import FavoriteRestaurantDb from '../../data/favorite-restaurant-idb';
import RestaurantDbSource from '../../data/restaurantdb-source';
import UrlParser from '../../routes/url-parser';
import BookmarkButtonPresenter from '../../utils/bookmark-button-presenter';
import ReviewHandler from '../../utils/reviewHandler';
import { cardDetail } from '../templates/template-creator';

const Detail = {
  async render() {
    return `
      <div class="card-detail" id="card-detail"></div>
      <div id="bookmarkButtonContainer"></div>
    `;
  },

  async afterRender() {
    const hideJumbotron = document.querySelector('app-bar');
    hideJumbotron.style.display = 'none';

    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await RestaurantDbSource.detailRestaurant(url.id);
    const restaurantContainer = document.querySelector('#card-detail');
    restaurantContainer.innerHTML = cardDetail(restaurant.restaurant);
    BookmarkButtonPresenter.init({
      bookmarkButtonContainer: document.getElementById('bookmarkButtonContainer'),
      favoriteRestaurants: FavoriteRestaurantDb,
      restaurant: {
        id: restaurant.restaurant.id,
        name: restaurant.restaurant.name,
        city: restaurant.restaurant.city,
        pictureId: restaurant.restaurant.pictureId,
        description: restaurant.restaurant.description,
        rating: restaurant.restaurant.rating,
      },
    });
    const submitReviewHandler = document.querySelector('#btn-review');
    submitReviewHandler.addEventListener('click', (e) => {
      e.preventDefault();
      ReviewHandler();
    });
  },
};

export default Detail;
