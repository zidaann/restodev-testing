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
        <img src="./images/heros/hero-image_2.jpg" alt="Gambar pemanis restaurant" tabindex="0" crossorigin="anonymous">
    </div>
            `;
  }
}

customElements.define('app-bar', AppBar);
