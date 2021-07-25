class Math {
  constructor() {
    this._arrayNumber = [];
  }

  add(number) {
    this._arrayNumber.push(number);
    return this;
  }

  subtract(number) {
    this._arrayNumber.push(-1 * number);
    return this;
  }

  multiply(number) {
    const lastNumber = this._arrayNumber.pop();
    this._arrayNumber.push(lastNumber * number);
    return this;
  }

  // create function that calculate the sum of the numbers
  // and return the sum
  sum() {
    let sum = 0;
    for (let i = 0; i < this._arrayNumber.length; i += 1) {
      sum += this._arrayNumber[i];
    }
    return sum;
  }
}

export default Math;
