import Home from './pages/home';

class App {
  constructor({ mainContent }) {
    this._mainContent = mainContent;
  }

  async render() {
    this._mainContent.innerHTML = await Home.render();
    await Home.afterRender();
  }
}

export default App;
