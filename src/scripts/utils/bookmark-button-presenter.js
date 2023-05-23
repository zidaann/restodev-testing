import {
  createBookmarkRestaurantButtonTemplate,
  createUnbookmarkedRestaurantButtonTemplate,
} from '../views/templates/template-creator';

const BookmarkButtonPresenter = {
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
    this._bookmarkButtonContainer.innerHTML = createBookmarkRestaurantButtonTemplate();

    const bookmarkButton = document.querySelector('#bookmarkButton');
    bookmarkButton.addEventListener('click', async () => {
      await this._favoriteRestaurants.putRestaurant(this._restaurant);
      this._renderButton();
    });
  },

  _renderUnbookmarked() {
    this._bookmarkButtonContainer.innerHTML = createUnbookmarkedRestaurantButtonTemplate();

    const bookmarkButton = document.querySelector('#bookmarkButton');
    bookmarkButton.addEventListener('click', async () => {
      await this._favoriteRestaurants.deleteRestaurant(this._restaurant.id);
      this._renderButton();
    });
  },
};

export default BookmarkButtonPresenter;
