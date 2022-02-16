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

describe('Test the conditions before the operations in calculte.js', () => {
  it('If AC button is pressed, it should clear the object', () => {
    //ARRANGE
    const obj = {}

    const objAfterClearing = {
      total: '0',
      next: null,
      operation: null,
    }

    //ACT
    const returnedObj = calculate(obj, "AC");

    //ASSERT
    expect(returnedObj).toEqual(objAfterClearing);

  });
})