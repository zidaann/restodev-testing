import FavoriteRestaurantIdb from '../src/scripts/data/favorite-restaurant-idb';
import * as TestFactories from './helpers/testFactories';

describe('Bookmarking A Restaurant', () => {
  const addLikeButtonContainer = () => {
    document.body.innerHTML = '<div id="bookmarkButtonContainer"></div>';
  };

  beforeEach(() => {
    addLikeButtonContainer();
  });

  it('should show the bookmark button when the restaurant has not been unbookmarked before', async () => {
    await TestFactories.createBookmarkButtonPresenterWithRestaurant({ id: 1 });

    expect(document.querySelector('[aria-label="bookmark this restaurant"]'))
      .toBeTruthy();
  });

  it('should not show the unbookmarked button when the restaurant has not been unbookmarked before', async () => {
    await TestFactories.createBookmarkButtonPresenterWithRestaurant({ id: 1 });

    expect(document.querySelector('[aria-label="unbookmarked this restaurant"]')).toBeFalsy();
  });

  it('should be able to bookmark the restaurant', async () => {
    await TestFactories.createBookmarkButtonPresenterWithRestaurant({ id: 1 });

    document.querySelector('#bookmarkButton').dispatchEvent(new Event('click'));
    const restaurant = await FavoriteRestaurantIdb.getRestaurant(1);

    expect(restaurant).toEqual({ id: 1 });

    FavoriteRestaurantIdb.deleteRestaurant(1);
  });

  it('should not add a restaurant again when its already unbookmarked', async () => {
    await TestFactories.createBookmarkButtonPresenterWithRestaurant({ id: 1 });

    // Tambahkan film dengan ID 1 ke daftar film yang disukai
    await FavoriteRestaurantIdb.putRestaurant({ id: 1 });
    // Simulasikan pengguna menekan tombol suka film
    document.querySelector('#bookmarkButton').dispatchEvent(new Event('click'));
    // tidak ada film yang ganda
    expect(await FavoriteRestaurantIdb.getAllRestaurants()).toEqual([{ id: 1 }]);

    FavoriteRestaurantIdb.deleteRestaurant(1);
  });

  it('should not add a restaurant when it has no id', async () => {
    await TestFactories.createBookmarkButtonPresenterWithRestaurant({});

    document.querySelector('#bookmarkButton').dispatchEvent(new Event('click'));

    expect(await FavoriteRestaurantIdb.getAllRestaurants()).toEqual([]);
  });
});
