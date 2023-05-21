import FavoriteRestaurantDb from '../src/scripts/data/favorite-restaurant-idb';
import * as TestFactories from './helpers/testFactories';

// eslint-disable-next-line no-undef
describe('Marking A Restaurant', () => {

  const addBookmarkButtonContainer = () => {
    document.body.innerHTML = '<div id="bookmarkButtonContainer"></div>';
  };

  beforeEach(() => {
    addBookmarkButtonContainer();
  });

  // eslint-disable-next-line no-undef
  it('should show the bookmark button when the bookmark has not been liked before', async () => {
    await TestFactories.createBookmarkButtonPresenterWithRestaurant({ id: 1 });
    // eslint-disable-next-line no-undef
    expect(document.querySelector('[aria-label="bookmark this restaurant"]')).toBeTruthy();
  });

  // eslint-disable-next-line no-undef
  it('should not show the unbookmark button when the movie has not been bookmarked before', async () => {
    await TestFactories.createBookmarkButtonPresenterWithRestaurant({ id: 1 });

    // eslint-disable-next-line no-undef
    expect(document.querySelector('[aria-label="unbookmarked this restaurant"]')).toBeFalsy();
  });

  // eslint-disable-next-line no-undef
  it('should be able to bookmark the restaurant', async () => {
    await TestFactories.createBookmarkButtonPresenterWithRestaurant({ id: 1 });

    document.querySelector('#bookmarkButton').dispatchEvent(new Event('click'));
    const restaurant = await FavoriteRestaurantDb.getRestaurant(1);
    // eslint-disable-next-line no-undef
    expect(restaurant).toEqual({ id: 1 });

    FavoriteRestaurantDb.deleteRestaurant(1);
  });

  // Skenario negatif
  it('should not add a restaurant again when its already bookmarked', async () => {
    await TestFactories.createBookmarkButtonPresenterWithRestaurant({ id: 1 });

    // Tambahkan restaurant dengan ID 1 ke daftar film yang disukai
    await FavoriteRestaurantDb.putRestaurant({ id: 1 });
    // Simulasikan pengguna menekan tombol suka restaurant
    document.querySelector('#bookmarkButton').dispatchEvent(new Event('click'));
    // tidak ada restaurant yang ganda
    // eslint-disable-next-line no-undef
    expect(await FavoriteRestaurantDb.getAllRestaurants()).toEqual([{ id: 1 }]);
    FavoriteRestaurantDb.deleteRestaurant(1);
  });

  it('should not add a restaurant when it has no id', async () => {
    await TestFactories.createBookmarkButtonPresenterWithRestaurant({ });

    document.querySelector('#bookmarkButton').dispatchEvent(new Event('click'));
    // eslint-disable-next-line no-undef
    expect(await FavoriteRestaurantDb.getAllRestaurants()).toEqual([]);
  });
});
