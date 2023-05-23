import BookmarkButtonPresenter from '../../src/scripts/utils/bookmark-button-presenter';
import FavoriteRestaurantIdb from '../../src/scripts/data/favorite-restaurant-idb';

const createBookmarkButtonPresenterWithRestaurant = async (restaurant) => {
  await BookmarkButtonPresenter.init({
    bookmarkButtonContainer: document.querySelector('#bookmarkButtonContainer'),
    favoriteRestaurants: FavoriteRestaurantIdb,
    restaurant,
  });
};

export { createBookmarkButtonPresenterWithRestaurant };
