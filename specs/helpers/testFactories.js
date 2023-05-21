import FavoriteRestaurantDb from "../../src/scripts/data/favorite-restaurant-idb";
import BookmarkButtonPresenter from "../../src/scripts/utils/bookmark-button-presenter";

const createBookmarkButtonPresenterWithRestaurant = async (restaurant) => {
  await BookmarkButtonPresenter.init({
    bookmarkButtonContainer: document.querySelector('#bookmarkButtonContainer'),
    favoriteRestaurants: FavoriteRestaurantDb,
    restaurant,
  });
};

// eslint-disable-next-line import/prefer-default-export
export { createBookmarkButtonPresenterWithRestaurant };