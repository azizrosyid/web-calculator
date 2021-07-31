import Math from "../src/scripts/utils/basic-math-helper";

describe("should call chain before type formula", () => {
  const math = new Math();
  test("should error when without call method chain", () => {
    expect(() => math.add(10).done()).toThrowError();
  });
  test("should not error when call with method chain", () => {
    expect(() => math.chain(0).add(10).done()).not.toThrowError();
  });
});

describe("add and substract test", () => {
  const math = new Math();

  const addCases = [
    { init: 10, numbers: [2, 3, 1, 2], expected: 18 },
    { init: 20, numbers: [-10, -10, -10, -10], expected: -20 },
    { init: -10, numbers: [10, 10, 10, 10], expected: 30 },
    { init: 10, numbers: [-10, -10, -10, -10], expected: -30 },
  ];
  test.each(addCases)(
    "should correct function add numbers",
    ({ init, numbers, expected }) => {
      const result = math.chain(init);
      numbers.forEach((number) => {
        result.add(number);
      });
      expect(result.done()).toBe(expected);
    }
  );

  const substractCases = [
    { init: 10, numbers: [2, 3, 1, 2], expected: 2 },
    { init: 20, numbers: [-10, -10, -10, -10], expected: 60 },
    { init: -10, numbers: [10, 10, 10, 10], expected: -50 },
    { init: 10, numbers: [-10, -10, -10, -10], expected: 50 },
  ];

  test.each(substractCases)(
    "should correct function substract numbers",
    ({ init, numbers, expected }) => {
      const result = math.chain(init);
      numbers.forEach((number) => {
        result.subtract(number);
      });
      expect(result.done()).toBe(expected);
    }
  );

  const mixedCases = [
    {
      init: 10,
      numbers: { add: [2, 3, 1, 2], substract: [2, -4, 15, 21] },
      expected: -16,
    },
    {
      init: 20,
      numbers: { add: [-10, -10, -10, -10], substract: [2, 4, -15, 21] },
      expected: -32,
    },
    {
      init: -10,
      numbers: { add: [10, 10, 10, 10], substract: [-2, 4, 15, 21] },
      expected: -8,
    },
  ];
  test.each(mixedCases)(
    "should correct function add and subtract numbers",
    ({ init, numbers, expected }) => {
      const result = math.chain(init);
      numbers.add.forEach((number) => {
        result.add(number);
      });
      numbers.substract.forEach((number) => {
        result.subtract(number);
      });
      expect(result.done()).toBe(expected);
    }
  );

  test("function add should handle floating point error", () => {
    const number = math.chain(0);
    for (let i = 1; i <= 10; i++) {
      for (let j = 1; j <= i; j++) {
        number.add(0.1);
      }
      expect(number.done()).toBe(i / 10);
    }
  });

  test("function add should handle floating point error", () => {
    for (let i = 1; i <= 10; i++) {
      const number = math.chain(1);
      for (let j = 1; j <= i; j++) {
        number.subtract(0.1);
      }
      expect(number.done()).toBe((10 - i) / 10);
    }
  });
});

describe("multiply test", () => {
  const math = new Math();

  const multiplyCases = [
    { init: 10, numbers: [5, 2, 10, 20], expected: 20000 },
    { init: 0, numbers: [-5, -2, -10, -20], expected: 0 },
    { init: -10, numbers: [-5, -2, -10, -20], expected: -20000 },
  ];
  test.each(multiplyCases)(
    "should correct function multiply numbers with int number",
    ({ init, numbers, expected }) => {
      const result = math.chain(init);
      numbers.forEach((number) => {
        result.multiply(number);
      });
      expect(result.done()).toBe(expected);
    }
  );

  const multiplyFloatCases = [
    { init: 2.5, numbers: [2, 4, 5, 6], expected: 600 },
    { init: -1.5, numbers: [2, 4, 5, 6], expected: -360 },
    { init: -1.5, numbers: [2.5, 4.2, 5.5, 6.1], expected: -528.4125 },
  ];
  test.each(multiplyFloatCases)(
    "should correct function multiply numbers with float number",
    ({ init, numbers, expected }) => {
      const result = math.chain(init);
      numbers.forEach((number) => {
        result.multiply(number);
      });
      expect(result.done()).toBe(expected);
    }
  );

  const multiplyFloatingPointCases = [
    { init: 10.5, numbers: [-4.4, -2.2, -2.2], expected: -223.608 },
    { init: 0.1, numbers: [0.1, 0.1], expected: 0.001 },
    { init: 0.2, numbers: [0.2], expected: 0.04 },
  ];

  test.each(multiplyFloatingPointCases)(
    "should correct function multiply numbers with floating point number",
    ({ init, numbers, expected }) => {
      const result = math.chain(init);
      numbers.forEach((number) => {
        result.multiply(number);
      });
      expect(result.done()).toBe(expected);
    }
  );

  test("multipy start with zero", () => {
    expect(math.chain(0).multiply(0.1).done()).toBe(0);
    expect(math.chain(0).multiply(2).done()).toBe(0);
    expect(math.chain(0).multiply(100).done()).toBe(0);
  });
});

describe("divide test", () => {
  const math = new Math();
  const divideCases = [
    { init: 100, numbers: [2, 5], expected: 10 },
    { init: 100.5, numbers: [2, 2], expected: 25.125 },
    { init: 100, numbers: [-2], expected: -50 },
  ];
  test.each(divideCases)(
    "should correct function divide numbers with int number",
    ({ init, numbers, expected }) => {
      const result = math.chain(init);
      numbers.forEach((number) => {
        result.divide(number);
      });
      expect(result.done()).toBe(expected);
    }
  );
  const divideFloatCases = [
    { init: 100, numbers: [2.5, 5], expected: 8 },
    { init: 100.5, numbers: [2.5, 2], expected: 20.1 },
    { init: 100, numbers: [-2.5], expected: -40 },
  ];
  test.each(divideFloatCases)(
    "should correct function divide numbers with float number",
    ({ init, numbers, expected }) => {
      const result = math.chain(init);
      numbers.forEach((number) => {
        result.divide(number);
      });
      expect(result.done()).toBe(expected);
    }
  );

  test("should throw error when divide by zero", () => {
    expect(() => math.chain(100).divide(0)).toThrowError("Division by zero");
    expect(() => math.chain(0.2).divide(0)).toThrowError("Division by zero");
    expect(() => math.chain(0).divide(0)).toThrowError("Division by zero");
  });

  const divideFloatingPointCases = [
    { init: 0.3, numbers: [0.1], expected: 3 },
    { init: 0.6, numbers: [0.1], expected: 6 },
    { init: 0.7, numbers: [0.1], expected: 7 },
  ];

  test.each(divideFloatingPointCases)(
    "should correct function divide numbers with floating point number",
    ({ init, numbers, expected }) => {
      const result = math.chain(init);
      numbers.forEach((number) => {
        result.divide(number);
      });
      expect(result.done()).toBe(expected);
    }
  );

  test("divide start with zero", () => {
    expect(math.chain(0).divide(10).done()).toBe(0);
    expect(math.chain(0).divide(10).add(10).multiply(3).done()).toBe(30);
    expect(math.chain(0).divide(0.1).multiply(3).done()).toBe(0);
  });
});

describe("mixed test", () => {
  const math = new Math();

  test("should handle floating point", () => {
    const result = math
      .chain(0)
      .add(0.1)
      .add(0.2)
      .multiply(10)
      .divide(0.1)
      .done();
    expect(result).toBe(20.1);
  });

  test("should correct int mixed cases", () => {
    expect(
      math.chain(30).subtract(18).divide(6).multiply(2).add(19).done()
    ).toBe(43);
    expect(math.chain(6).multiply(10).divide(40).add(27).done()).toBe(28.5);
    expect(
      math.chain(2).add(100).divide(5).multiply(4).subtract(48).done()
    ).toBe(34);
  });

  test("should correct float mixed cases", () => {
    expect(
      math
        .chain(12)
        .multiply(0.25)
        .multiply(3.6)
        .multiply(23)
        .divide(100)
        .done()
    ).toBe(2.484);
    expect(
      math.chain(0.5).multiply(10.23).divide(3.3).add(0.1).add(0.2).done()
    ).toBe(1.85);
    expect(math.chain(1).divide(3).done()).toBeCloseTo(0.33333, 5);
  });
});
