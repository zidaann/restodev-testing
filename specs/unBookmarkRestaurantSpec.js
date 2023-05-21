import FavoriteRestaurantDb from '../src/scripts/data/favorite-restaurant-idb';
import * as TestFactories from './helpers/testFactories';

// eslint-disable-next-line no-undef
describe('Unmarking A Restaurant', () => {
  const addBookmarkButtonContainer = () => {
    document.body.innerHTML = '<div id="bookmarkButtonContainer"></div>';
  };

  // eslint-disable-next-line no-undef
  beforeEach(async () => {
    addBookmarkButtonContainer();
    await FavoriteRestaurantDb.putRestaurant({ id: 1 });
  });

  // eslint-disable-next-line no-undef
  afterEach(async () => {
    await FavoriteRestaurantDb.deleteRestaurant(1);
  });

  it('should display unbookmarked widget when the restaurant has been bookmarked', async () => {
    await TestFactories.createBookmarkButtonPresenterWithRestaurant({ id: 1 });

    expect(document.querySelector('[aria-label="unbookmarked this restaurant"]'))
      .toBeTruthy();
  });

  it('should not display bookmark widget when the restaurant has been bookmarked', async () => {
    await TestFactories.createBookmarkButtonPresenterWithRestaurant({ id: 1 });

    expect(document.querySelector('[aria-label="bookmark this restaurant"]'))
      .toBeFalsy();
  });

  it('should be able to remove bookmarked restaurant from the list', async () => {
    await TestFactories.createBookmarkButtonPresenterWithRestaurant({ id: 1 });
    document.querySelector('[aria-label="unbookmarked this restaurant"]').dispatchEvent(new Event('click'));
    expect(await FavoriteRestaurantDb.getAllRestaurants()).toEqual([]);
  });

  it('should not throw error if the unbookmarked restaurant is not in the list', async () => {
    await TestFactories.createBookmarkButtonPresenterWithRestaurant({ id: 1 });
    // hapus dulu film dari daftar film yang disukai
    await FavoriteRestaurantDb.deleteRestaurant(1);
    // kemudian, simulasikan pengguna menekan widget batal menyukai film
    document.querySelector('[aria-label="unbookmarked this restaurant"]').dispatchEvent(new Event('click'));
    expect(await FavoriteRestaurantDb.getAllRestaurants()).toEqual([]);
  });
});
