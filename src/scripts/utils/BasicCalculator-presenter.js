import { createButtonInputCalculator, createContainerButtonCalculator, createDisplayCalculator } from '../views/templates/templates-creator';

class BasicCalculatorPresenter {
  constructor({ calculatorContainer, mathHelper, buttons }) {
    this._container = calculatorContainer;
    this._math = mathHelper;
    this._buttons = buttons;
  }

  render() {
    this.renderDisplayCalculator();
    this.renderButtons(this._buttons);
  }

  renderDisplayCalculator() {
    const displayCalculator = createDisplayCalculator();
    this._container.appendChild(displayCalculator);
    this._formulaScreen = displayCalculator.querySelector('.calculator__display__formula');
    this._resultScreen = displayCalculator.querySelector('.calculator__display__screen');
  }

  renderButtons(buttons) {
    const buttonsContainer = createContainerButtonCalculator();
    buttons.sort((a, b) => a.order - b.order).forEach((button, index) => {
      buttonsContainer.innerHTML += (createButtonInputCalculator({ symbol: button.symbol, attribute: [`data-${button.type.toLowerCase()}`], buttonModifier: button.classModifier }));
      if ((index + 1) % 4 === 0) {
        buttonsContainer.innerHTML += '<div class="w-100"></div>';
      }
    });
    this._container.appendChild(buttonsContainer);

    this._numberButtons = buttonsContainer.querySelectorAll('[data-number]');
    this._operatorButtons = buttonsContainer.querySelectorAll('[data-operator]');
    this._powerButtons = buttonsContainer.querySelectorAll('[data-power]');
    this._equalButtons = buttonsContainer.querySelector('[data-equal]');
    this._clearAllButtons = buttonsContainer.querySelector('[data-clear_all]');
    this._clearButtons = buttonsContainer.querySelector('[data-clear]');
    this._backspaceButtons = buttonsContainer.querySelector('[data-backspace]');
    this._negationButtons = buttonsContainer.querySelector('[data-negation]');

    this._setupEventListeners();
  }

  _setupEventListeners() {
    this._numberButtons.forEach((button) => button.addEventListener('click', (e) => this._handleNumberButton(e)));
    this._operatorButtons.forEach((button) => button.addEventListener('click', (e) => this._handleOperatorButton(e)));
    this._backspaceButtons.addEventListener('click', (e) => this._handleBackspaceButton(e));
    this._clearButtons.addEventListener('click', (e) => this._handleClearScreenButton(e));
    this._clearAllButtons.addEventListener('click', (e) => this._handleClearAllScreenButton(e));
    this._equalButtons.addEventListener('click', (e) => this._handleEqualButton(e));
    this._negationButtons.addEventListener('click', (e) => this._handleNegationButton(e));
    this._powerButtons.forEach((button) => button.addEventListener('click', (e) => this._handlePowerButtons(e)));
  }

  _handleNumberButton(event) {
    const button = event.target;
    const number = button.innerText;

    if (number === '.' && this._resultScreen.innerText.slice(-1)[0] === '.') return;

    this._resultScreen.innerText += number;
  }

  _handleOperatorButton(event) {
    const button = event.target;
    const operator = button.innerText;

    const operatorSymbol = [...this._operatorButtons].map((btn) => btn.innerText);

    if (this._resultScreen.innerText === '') return;
    if (operatorSymbol.includes(this._resultScreen.innerText.slice(-1)[0])) {
      this._resultScreen.innerText = this._resultScreen.innerText.slice(0, -1) + operator;
      return;
    }

    this._resultScreen.innerText += operator;
  }

  _handleBackspaceButton() {
    this._resultScreen.innerText = this._resultScreen.innerText.slice(0, -1);
  }

  _handleClearScreenButton() {
    this._resultScreen.innerText = '';
  }

  _handleClearAllScreenButton() {
    this._resultScreen.innerText = '';
    this._formulaScreen.innerText = '';
  }

  _handleEqualButton() {
    const formula = this._resultScreen.innerText;
    this._formulaScreen.innerText = formula;

    if (formula === '') return;

    this._resultScreen.innerText = this._math.solveEquation(formula);
  }

  _handleNegationButton() {
    if (this._resultScreen.innerText[0] === '-') {
      this._resultScreen.innerText = this._resultScreen.innerText.substring(1);
    } else {
      this._resultScreen.innerText = `-${this._resultScreen.innerText}`;
    }
  }

  _handlePowerButtons(event) {
    const button = event.target;
    const power = button.innerText.slice(-1)[0];

    const powerSymbol = [...this._powerButtons].map((btn) => btn.innerText.slice(-1)[0]);

    if (this._resultScreen.innerText === '') return;
    if (powerSymbol.includes(this._resultScreen.innerText.slice(-1)[0])) {
      this._resultScreen.innerText = this._resultScreen.innerText.slice(0, -1) + power;
      return;
    }
    this._resultScreen.innerText += power;
  }
}

export default BasicCalculatorPresenter;
