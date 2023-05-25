import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import './components/footer-bar';
import './components/app-bar';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
import App from './views/app';
import swRegister from './utils/sw-register';
import skeletonHandler from './utils/skeletonHandler';

const app = new App({
  button: document.querySelector('#menu-hamburger'),
  drawer: document.querySelector('#navigationDrawer'),
  content: document.querySelector('#mainContent'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});
