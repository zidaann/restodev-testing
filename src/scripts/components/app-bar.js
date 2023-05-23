class AppBar extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowDOM.innerHTML = `  
    <style>
    .jumbotron img{
      width: 100%;
      height: 70vh;
      object-position: center;
      object-fit: cover;
    }

    @media screen and (max-width: 600px){
      .jumbotron img{
        height: 40vh;
      }
    }
    @media screen and (min-width: 700px ){
      .jumbotron img{
        height: 60vh;
      }
    }
    @media screen and (min-width: 800px) {
      .jumbotron img{
        height: 50vh;
      }
    }
    </style>    
    <div class="jumbotron" id="jumbotron">
    <picture>
        <source media="(max-width: 800px)" srcset="./images/heros/hero-small.jpg" class="lazyload">
        <img src="./images/heros/hero-large.jpg" alt="Gambar restaurant" tabindex="0" crossorigin="anonymous" class="lazyload">
    </picture>
    </div>
            `;
  }
}

customElements.define('app-bar', AppBar);
