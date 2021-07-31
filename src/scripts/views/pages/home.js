import BASIC_CALCULATOR from '../../globals/button-calculator';
import BasicCalculatorPresenter from '../../utils/BasicCalculator-presenter';
import EvaluateMathHelper from '../../utils/eval-math-helper';

const Home = {
  async render() {
    return `
        <div id="calculator-container" class="container my-5">
            <h2 class="text-center">Basic Calculator</h2>
        </div>
        `;
  },
  async afterRender() {
    const calculatorContainer = document.querySelector('#calculator-container');
    const mathHelper = new EvaluateMathHelper();
    const basicCalculator = new BasicCalculatorPresenter({
      calculatorContainer,
      mathHelper,
      buttons: BASIC_CALCULATOR,
    });
    basicCalculator.render();
  },
};

export default Home;
