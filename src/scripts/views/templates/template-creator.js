import CONFIG from '../../globals/config';

const cardDetail = (data) => `
<div class="card-detail-header">
<picture>
  <img class="lazyload" data-src='${CONFIG.BASE_IMAGE_URL_MD + data.pictureId}' alt="${data.name}"tabindex="0" />
</picture>
<h2 tabindex="0" class="restaurant-title">${data.name}</h2>

</div>
<div class="card-detail-body">
<div class="card-detail-description">
  <div class="card-detail-description-left">
    <h3 tabindex="0">Detail</h2>
      <ul>
        <li>
          <span tabindex="0">Decription</span>
          <p tabindex="0">${data.description}</p>
        </li>
        <li>
          <span tabindex="0">Kota</span>
          <p tabindex="0">
            ${data.city}
          </p>
        </li>
        <li>
          <span tabindex="0">Alamat</span>
          <p tabindex="0">
            ${data.address}
          </p>
        </li>
        <li>
          <span tabindex="0">Rating</span>
          <p tabindex="0">
            ${data.rating}
          </p>
        </li>
        <li>
          <span tabindex="0">Kategori</span>
          <div class = "categories">
            ${data.categories.map((category) => `<span tabindex="0">${category.name}</span>`).join('')}
          </div>
        </li>
      </ul>
  </div>
  <div class="card-detail-description-right">
    <h3 tabindex="0">Menu</h2>
      <ul>
        <li>
          <span tabindex="0">Makanan</span>
          ${data.menus.foods.map((item) => `<p tabindex="0">- ${item.name}</p>`).join('')}
        </li>
        <li>
          <span tabindex="0">Minuman</span>
          ${data.menus.drinks.map((item) => `<p tabindex="0">- ${item.name}</p>`).join('')}
        </li>
      </ul>
  </div>
</div>
</div>
<div class="card-detail-review">
<h3 tabindex="0">Ulasan</h3>
<div class="form-review">
  <form action="">
    <div class="mb-3">
      <label for="nama" >Nama</label>
      <input type="text" placeholder="Nama" id="nama" required >
    </div>
    <div class="mb-3">
      <label for="ulasan">Ulasan</label>
      <textarea  id="ulasan" rows="5" placeholder="Ketik ulasan anda..." required></textarea>
    </div>
    <button type="submit" class="btn-review" id="btn-review" tabindex="0">Kirim</button>
  </form>
</div>
${data.customerReviews.map((reviewer) => `
    <div class="card-review">
    <div class="card-review-header">
      <h4 tabindex="0">${reviewer.name}</h4>
      <span tabindex="0">${reviewer.date}</span>
    </div>
    <div class="card-review-body">
      <p tabindex="0">${reviewer.review}</p>
    </div>
  </div>
    `).join('')}
</div>
`;

const card = (data) => `
        <div class="card">
        <picture>
          <source media="(max-width: 450px)" data-srcset="${CONFIG.BASE_IMAGE_URL_SM + data.pictureId}" tabindex="0" class="lazyload">
          <img class="lazyload" data-src='${CONFIG.BASE_IMAGE_URL_SM + data.pictureId}' alt="${data.name}"tabindex="0" />
        </picture>
            <div class="card-header restaurant-title" ><a href="#/detail/${data.id}" tabindex="0">${data.name}</a></div>
            <div class="card-body">${data.description} </div>
            <div class="card-footer">
            <div class="card-city" tabindex="0"><strong>Kota: </strong> ${data.city}</div>
            <div class="card-rate" tabindex="0"><strong>Rating:   </strong>${data.rating} </div>
            </div>
          </div>
      `;

const createBookmarkRestaurantButtonTemplate = () => `
    <button aria-label="bookmark this restaurant" id="bookmarkButton" class="bookmark">
    <i class="fa fa-bookmark-o" aria-hidden="true"></i>
    </button>
`;

const createUnbookmarkedRestaurantButtonTemplate = () => `
    <button aria-label="unbookmarked this restaurant" id="bookmarkButton" class="bookmark">
    <i class="fa fa-bookmark" aria-hidden="true"></i>
    </button>
`;
export {
  card, cardDetail,
  createBookmarkRestaurantButtonTemplate,
  createUnbookmarkedRestaurantButtonTemplate,
};
