/* eslint-disable class-methods-use-this */
import Decimal from 'decimal.js';

class EvaluateMathHelper {
  constructor() {
    this.operations = {
      '+': (a, b) => new Decimal(a).plus(b),
      '-': (a, b) => new Decimal(a).minus(b),
      '*': (a, b) => new Decimal(a).times(b),
      '/': (a, b) => {
        if (b === 0) throw new Error('Division by zero');
        return new Decimal(a).dividedBy(b);
      },
      '√': (a, b) => {
        const number1 = a === 0 ? 1 : a;
        return new Decimal(b).sqrt().times(number1);
      },
      '**': (a, b) => new Decimal(a).pow(b),
    };

    this._symbolToReplace = {
      '×': '*',
      '÷': '/',
      '²': '**2',
      '³': '**3',
      '−': '-',
      '%': '/100',
    };

    this.solverArray = this.solverArray.bind(this);
    this.solveEquation = this.solveEquation.bind(this);
    this.replaceSymbol = this.replaceSymbol.bind(this);
    this.solvePower = this.solvePower.bind(this);
    this.solveSqrt = this.solveSqrt.bind(this);
    this.splitByOperation = this.splitByOperation.bind(this);
  }

  solverArray(arrEquation) {
    let result = arrEquation[0] || 0;

    let i = 0;
    while (arrEquation.length > 1 && arrEquation.length - 1 > i) {
      const operator = arrEquation[i + 1];
      result = this.operations[operator](
        parseFloat(result),
        parseFloat(arrEquation[i + 2]),
      );
      i += 2;
    }
    return result;
  }

  replaceSymbol(equation) {
    let result = equation;

    Object.entries(this._symbolToReplace).forEach(([key, value]) => {
      result = result.replace(new RegExp(key, 'gi'), value);
    });
    return result;
  }

  solvePower(equationWithoutSymbols) {
    const resultEquationPower = equationWithoutSymbols.replace(/(\d*\*\*\d)/gi, (match) => {
      const [a, operator, b] = match.split(/(\*\*)/);
      return this.operations[operator](parseFloat(a), parseFloat(b));
    });
    return resultEquationPower;
  }

  solveSqrt(equationWithoutSymbols) {
    const resultEquationSqrt = equationWithoutSymbols.replace(/√\d*/gi, (match) => {
      const operator = match[0];
      const number = match.substring(1);
      return this.operations[operator](1, number);
    });
    return resultEquationSqrt;
  }

  splitByOperation(equationWithoutSymbols) {
    const result = equationWithoutSymbols.split(/(\+|-)/gi).map((eq1) => eq1.trim().split(/(\*|\/)/gi).map((eq2) => eq2.trim()));
    return result;
  }

  solveEquation(equation) {
    const equationWithoutSymbols = this.replaceSymbol(equation.trim());
    const resultEquationPower = this.solvePower(equationWithoutSymbols);
    const resultEquationSqrt = this.solveSqrt(resultEquationPower);
    const equationSplitByOperator = this.splitByOperation(resultEquationSqrt);

    if (equationSplitByOperator[0].length === 1 && equationSplitByOperator.length === 1) {
      return equationSplitByOperator[0][0];
    }

    const solveMultiplyDivide = equationSplitByOperator.map(this.solverArray);
    const solvePlusMinus = this.solverArray(solveMultiplyDivide);
    const result = solvePlusMinus.toNumber();

    if (Number.isNaN(result)) throw new Error('Invalid equation');

    return result;
  }
}

export default EvaluateMathHelper;
