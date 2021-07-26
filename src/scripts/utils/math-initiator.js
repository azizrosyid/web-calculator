import Decimal from 'decimal.js';

class Math {
  chain(number) {
    this._arrayNumber = [];
    this._arrayNumber.push(new Decimal(number));
    return this;
  }

  add(number) {
    this._arrayNumber.push(new Decimal(number));
    return this;
  }

  subtract(number) {
    this._arrayNumber.push(new Decimal(number).negated());
    return this;
  }

  multiply(number) {
    const lastNumber = this._arrayNumber.pop();
    this._arrayNumber.push(new Decimal(lastNumber).times(number));
    return this;
  }

  divide(number) {
    if (number === 0) {
      this._arrayNumber = [];
      throw new Error('Division by zero');
    }
    const lastNumber = this._arrayNumber.pop();
    this._arrayNumber.push(new Decimal(lastNumber).div(number));
    return this;
  }

  // create function that calculate the sum of the numbers
  // and return the sum
  done() {
    let sum = new Decimal(0);
    for (let i = 0; i < this._arrayNumber.length; i += 1) {
      sum = sum.plus(this._arrayNumber[i]);
    }
    this._arrayNumber = [];
    return sum.toNumber();
  }
}

export default Math;
