import EvaluateMathHelper from "../src/scripts/utils/eval-math-helper";

describe("Evaluate Math Helper", () => {
  const math = new EvaluateMathHelper();
  test("power test", () => {
    expect(math.solveEquation("7**3")).toBe('343');
    expect(math.solveEquation("7**2")).toBe('49');
  });
});
