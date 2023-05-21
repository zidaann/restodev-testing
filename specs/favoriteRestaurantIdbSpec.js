import { itActsAsFavoriteRestaurantModel } from "./contract/favoriteRestaurantContract";
import FavoriteRestaurantDb from '../src/scripts/data/favorite-restaurant-idb';

describe('Favorite Restaurant Idb Contract Test Implementation', () => {
  afterEach(async () => {
    (await FavoriteRestaurantDb.getAllRestaurants()).forEach(async (restaurant) => {
      await FavoriteRestaurantDb.deleteRestaurant(restaurant.id);
    });
  });

  itActsAsFavoriteRestaurantModel(FavoriteRestaurantDb);
});