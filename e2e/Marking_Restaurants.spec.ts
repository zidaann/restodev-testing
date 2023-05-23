Feature('Marking Restaurants');
Before(({ I }) => {
    I.amOnPage('#/favorite');
})
Scenario('showing empty bookmarked restaurants', ({ I }) => {
    I.seeElement('#query');
    // I.waitForElement('.restaurant-items__not__found', 30);
    I.see('Tidak ada restaurant untuk ditampilkan', '.restaurant-items__not__found');
});
