const assert = require('assert');

Feature('Bookmark Restaurants');

Before(({ I }) => {
  I.amOnPage('#/favorite');
});

Scenario('showing empty bookmarked restaurants', ({ I }) => {
  I.seeElement('#query');
  I.see('Tidak ada restaurant untuk ditampilkan', '.restaurant-item-not-found');
});

Scenario('bookmark one restaurant', async ({ I }) => {
  I.see('Tidak ada restaurant untuk ditampilkan', '.restaurant-item-not-found');

  I.amOnPage('/');
  I.waitForElement('.restaurant-title a', 10);

  const firstRestaurant = locate('.restaurant-title a').first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.waitForElement('#bookmarkButton');
  I.click('#bookmarkButton');

  I.amOnPage('#/favorite');
  I.seeElement('.card');

  const likedRestaurantTitle = await I.grabTextFrom('.restaurant-title');
  assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle);
});
