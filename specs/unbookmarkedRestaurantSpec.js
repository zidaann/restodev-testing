import FavoriteRestaurantIdb from '../src/scripts/data/favorite-restaurant-idb';
import * as TestFactories from './helpers/testFactories';

const addLikeButtonContainer = () => {
  document.body.innerHTML = '<div id="bookmarkButtonContainer"></div>';
};

describe('Unbookmarked A Restaurant', () => {
  beforeEach(async () => {
    addLikeButtonContainer();
    await FavoriteRestaurantIdb.putRestaurant({ id: 1 });
  });

  afterEach(async () => {
    await FavoriteRestaurantIdb.deleteRestaurant(1);
  });

  it('should display unbookmarked widget when the restaurant has been unbookmarked', async () => {
    await TestFactories.createBookmarkButtonPresenterWithRestaurant({ id: 1 });

    expect(document.querySelector('[aria-label="unbookmarked this restaurant"]')).toBeTruthy();
  });

  it('should not display bookmark widget when the restaurant has been unbookmarked', async () => {
    await TestFactories.createBookmarkButtonPresenterWithRestaurant({ id: 1 });

    expect(document.querySelector('[aria-label="bookmark this restaurant"]')).toBeFalsy();
  });

  it('should be able to remove unbookmarked restaurant from the list', async () => {
    await TestFactories.createBookmarkButtonPresenterWithRestaurant({ id: 1 });

    document.querySelector('[aria-label="unbookmarked this restaurant"]').dispatchEvent(new Event('click'));

    expect(await FavoriteRestaurantIdb.getAllRestaurants()).toEqual([]);
  });

  it('should not throw error if the unbookmarked restaurant is not in the list', async () => {
    await TestFactories.createBookmarkButtonPresenterWithRestaurant({ id: 1 });

    // hapus dulu film dari daftar film yang disukai
    await FavoriteRestaurantIdb.deleteRestaurant(1);

    // kemudian, simulasikan pengguna menekan widget batal menyukai film
    document.querySelector('[aria-label="unbookmarked this restaurant"]').dispatchEvent(new Event('click'));

    expect(await FavoriteRestaurantIdb.getAllRestaurants()).toEqual([]);
  });
});
