/* eslint-disable no-undef */
Feature('Unbookmarked Restaurants');
const assert = require('assert');

Before(({ I }) => {
  I.amOnPage('#/favorite');
});

Scenario('unbookmarked one restaurant', async ({ I }) => {
  I.see('Tidak ada restaurant untuk ditampilkan', '.restaurant-item-not-found');

  I.amOnPage('/');
  I.waitForElement('.restaurant-title a', 10);

  I.retry(3).seeElement('.card');

  const firstRestaurant = locate('.restaurant-title a').first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  // I.retry(3).seeElement('#bookmarkButton');
  I.waitForElement('#bookmarkButton');
  I.click('#bookmarkButton');

  I.amOnPage('#/favorite');
  I.retry(3).seeElement('.card');

  const likedRestaurantTitle = await I.grabTextFrom('.restaurant-title');
  assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle);

  I.click('.restaurant-title a');

  I.waitForElement('#bookmarkButton');
  I.retry(3).seeElement('#bookmarkButton');
  I.click('#bookmarkButton');

  I.amOnPage('#/favorite');
  I.see('Tidak ada restaurant untuk ditampilkan', '.restaurant-item-not-found');
});
