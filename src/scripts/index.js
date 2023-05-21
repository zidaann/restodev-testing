import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import './components/footer-bar';
import './components/app-bar';
import App from './view/app';
import swRegister from './utils/sw-register';
import HelperDarkMode from './utils/helper-darkMode';

const app = new App({
  button: document.querySelector('#hamburger'),
  drawer: document.querySelector('#navigationDrawer'),
  content: document.querySelector('#mainContent'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  HelperDarkMode();
  swRegister();
});
