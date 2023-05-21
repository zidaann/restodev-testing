import { createBookmarkRestaurantTemplate, createUnbookmarkedRestaurantTemplate } from '../view/templates/template-creator';

const BookmarkButtonPresenter = {
  // eslint-disable-next-line no-shadow
  async init({ bookmarkButtonContainer, favoriteRestaurants, restaurant }) {
    this._bookmarkButtonContainer = bookmarkButtonContainer;
    this._restaurant = restaurant;
    this._favoriteRestaurants = favoriteRestaurants;
    await this._renderButton();
  },

  async _renderButton() {
    const { id } = this._restaurant;
    if (await this._isRestaurantExist(id)) {
      this._renderUnbookmarked();
    } else {
      this._renderBookmark();
    }
  },

  async _isRestaurantExist(id) {
    const restaurant = await this._favoriteRestaurants.getRestaurant(id);
    return !!restaurant;
  },

  _renderBookmark() {
    this._bookmarkButtonContainer.innerHTML = createBookmarkRestaurantTemplate();

    const bookmark = document.getElementById('bookmarkButton');
    bookmark.addEventListener('click', async () => {
      await this._favoriteRestaurants.putRestaurant(this._restaurant);
      this._renderButton();
    });
  },

  _renderUnbookmarked() {
    this._bookmarkButtonContainer.innerHTML = createUnbookmarkedRestaurantTemplate();

    const unBookmarked = document.getElementById('bookmarkButton');
    unBookmarked.addEventListener('click', async () => {
      await this._favoriteRestaurants.deleteRestaurant(this._restaurant.id);
      this._renderButton();
    });
  },
};

export default BookmarkButtonPresenter;
