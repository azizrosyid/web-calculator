import 'bootstrap/js/dist/button';
import 'bootstrap/js/dist/dropdown';
import 'bootstrap/js/dist/collapse';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/styles.css';
import regeneratorRuntime from 'regenerator-runtime';
import App from './views/app';

const app = new App({
  mainContent: document.querySelector('main'),
});

window.addEventListener('load', async () => {
  await app.render();
});
