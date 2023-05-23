import RestaurantDbSource from '../data/therestaurantdb-source';
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
  // eslint-disable-next-line eqeqeq
  if (data.name != '' && data.review != '') {
    await RestaurantDbSource.createReview(data);
  } else {
    alert('Silahkan isi nama dan pesan anda');
  }
};

export default ReviewHandler;
