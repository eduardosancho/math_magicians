import calculate from '../calculate';
import operate from '../operate';

describe('Test calculate.js file', () => {
  it('Test that 2 + 2 equals 4', () => {
    const obj = {
      total: '2',
      next: '2',
      operation: '+',
    };

    const resultObj = calculate(obj, '=');
    const result = resultObj.total;

    expect(result).toBe('4');
  });
});

describe('Test the conditions before the operations in calculate.js', () => {
  it('If AC button is pressed, it should clear the object', () => {
    // ARRANGE
    const obj = {};

    const objAfterClearing = {
      total: '0',
      next: null,
      operation: null,
    };

    // ACT
    const returnedObj = calculate(obj, 'AC');

    // ASSERT
    expect(returnedObj).toEqual(objAfterClearing);
  });

  describe('Test for number buttons', () => {
    it(`If there is a number in obj.next with an operation and we press a new number,
    the number is added next to the obj.next one`, () => {
      // Arrange
      const obj = {
        total: null,
        next: '2',
        operation: '+',
      };

      // Act
      const returnedObj = calculate(obj, '4');
      const { next } = returnedObj;

      // Assert
      expect(next).toBe('24');
    });
    it(`If there isn't a number in obj.next with an operation and we press a new number,
    the number is added to the obj.next`, () => {
      // Arrange
      const obj = {
        total: null,
        next: null,
        operation: '+',
      };

      // Act
      const returnedObj = calculate(obj, '4');
      const { next } = returnedObj;

      // Assert
      expect(next).toBe('4');
    });
    it(`If there is a number in obj.next without an operation and we press a new number,
    the number is added next to the obj.next one`, () => {
      // Arrange
      const obj = {
        total: null,
        next: '2',
        operation: null,
      };

      // Act
      const returnedObj = calculate(obj, '4');
      const { next } = returnedObj;

      // Assert
      expect(next).toBe('24');
      expect(returnedObj.operation).toBeUndefined();
    });
    it(`If there isn't a number in obj.next without an operation and we press a new number,
    the number is added to the obj.next`, () => {
      // Arrange
      const obj = {
        total: null,
        next: '2',
        operation: null,
      };

      // Act
      const returnedObj = calculate(obj, '4');
      const { next } = returnedObj;

      // Assert
      expect(next).toBe('24');
      expect(returnedObj.operation).toBeUndefined();
    });
  });
  describe('Test for dot button', () => {
    it('If there is an obj.next and this includes a dot already', () => {
      const obj = {
        total: null,
        next: '2.',
        operation: null,
      };

      const returnedObj = calculate(obj, '.');

      expect(returnedObj).toEqual(obj);
    });
    it('If there is an obj.next and this includes a dot already', () => {
      const obj = {
        total: null,
        next: '2',
        operation: null,
      };
      const expectedObj = {
        total: null,
        next: '2.',
        operation: null,
      };

      const returnedObj = calculate(obj, '.');

      expect(returnedObj).toEqual(expectedObj);
    });
    it('If there is not an obj.next and there is an operation', () => {
      const obj = {
        total: null,
        next: null,
        operation: '+',
      };

      const returnedObj = calculate(obj, '.');
      const { next } = returnedObj;

      expect(next).toBe('0.');
      expect(returnedObj.operation).toBeUndefined();
    });
  });
});

describe('Tests for operate.js', () => {
  it('test sum 4 + 5', () => {
    const result = operate('4', '5', '+');
    expect(result).toBe('9');
  });
  it('test sum 4 - 5', () => {
    const result = operate('4', '5', '-');
    expect(result).toBe('-1');
  });
  it('test sum 4 * 5', () => {
    const result = operate('4', '5', 'x');
    expect(result).toBe('20');
  });
  it('test sum 20 / 5', () => {
    const result = operate('20', '5', '÷');
    expect(result).toBe('4');
  });
  it('test sum 20 % 5', () => {
    const result = operate('20', '5', '%');
    expect(result).toBe('0');
  });
});
