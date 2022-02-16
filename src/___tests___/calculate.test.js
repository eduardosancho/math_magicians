import calculate from "../logic/calculate";

describe('Test calculate.js file', () => {
  it('Test that 2 + 2 equals 4', () => {
    const obj = {
      total: '2',
      next: '2',
      operation: '+',
    }

    const resultObj = calculate(obj, "=");
    const result = resultObj.total;

    expect(result).toBe('4');
  })
})