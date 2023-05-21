import RestaurantDbSource from '../data/restaurantdb-source';
import UrlParser from '../routes/url-parser';

const ReviewHandler = async () => {
  const url = UrlParser.parseActiveUrlWithoutCombiner();
  const name = document.getElementById('nama');
  const review = document.getElementById('ulasan');
  //   const reviewContainer = document.querySelector('.card-review');
  const data = {
    id: url.id,
    name: name.value,
    review: review.value,
  };
  await RestaurantDbSource.createReview(data);
  name.value = '';
  review.value = '';
  // reviewContainer.innerHTML +=
};

export default ReviewHandler;
