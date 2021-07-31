const createButtonInputCalculator = ({ symbol, attribute = [], buttonModifier = [] }) => `
    <div class="calculator__input__button text-center col p-0 m-1">
        <button class="btn text-center rounded-2 border p-0 ${buttonModifier.join(' ')}" ${attribute.join(' ')}>${symbol}</button>
    </div>`;

const createDisplayCalculator = () => {
  const divDisplayCalculator = document.createElement('div');
  divDisplayCalculator.classList.add(...'calculator__display mx-auto w-75 border rounded-2 border-3'.split(' '));
  divDisplayCalculator.innerHTML += '<p class="calculator__display__formula text-end m-0 me-5 fs-5"></p>';
  divDisplayCalculator.innerHTML += '<p class="calculator__display__screen text-end m-0 me-5 fs-2"></p>';

  return divDisplayCalculator;
};

const createContainerButtonCalculator = () => {
  const buttonContainer = document.createElement('div');
  buttonContainer.classList.add(...'calculator__input row justify-content-md-center mx-auto w-75 border rounded-2 border-3 border-top-0'.split(' '));

  return buttonContainer;
};

export { createButtonInputCalculator, createDisplayCalculator, createContainerButtonCalculator };
