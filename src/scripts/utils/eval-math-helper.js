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

    this.solverArray = this.solverArray.bind(this);
    this.solveEquation = this.solveEquation.bind(this);
    this.replaceSymbol = this.replaceSymbol.bind(this);
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
    this._symbolToReplace = {
      '×': '*',
      '÷': '/',
      '²': '**2',
      '³': '**3',
      '−': '-',
      '%': '/100',
    };

    Object.entries(this._symbolToReplace).forEach(([key, value]) => {
      result = result.replace(new RegExp(key, 'gi'), value);
    });
    return result;
  }

  solveEquation(equation) {
    try {
      let eq = this.replaceSymbol(equation.trim());
      eq = eq.replace(/(\d*\*\*\d)/gi, (match) => {
        const [a, operator, b] = match.split(/(\*\*)/);
        return this.operations[operator](parseFloat(a), parseFloat(b));
      });
      eq = eq.replace(/√\d*/gi, (match) => {
        const operator = match[0];
        const number = match.substring(1);
        return this.operations[operator](1, number);
      });
      eq = eq.split(/(\+|-)/gi).map((eq1) => eq1.trim().split(/(\*|\/)/gi).map((eq2) => eq2.trim()));
      if (eq[0].length === 1 && eq.length === 1) {
        return eq[0][0];
      }

      const solveMultiplyDivide = eq.map(this.solverArray);
      const solvePlusMinus = this.solverArray(solveMultiplyDivide);
      const result = solvePlusMinus.toNumber();
      if (Number.isNaN(result)) throw new Error('Invalid equation');

      return result;
    } catch (error) {
      if (error.message === 'Division by zero') {
        return 'Error! Cannot divide by zero!';
      }
      return 'Error! Cannot solve equation!';
    }
  }
}

export default EvaluateMathHelper;
