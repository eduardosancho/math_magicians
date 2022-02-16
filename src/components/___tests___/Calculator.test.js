import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen, fireEvent } from '@testing-library/react';
import Calculator from '../Calculator';

describe('Test render of Calculator component', () => {
  it('Calculator elements are rendered correctly', () => {
    const { container } = render(<Calculator />);
    expect(container).toMatchSnapshot();
  });

  it('If buttons 5 and 6 are pressed, Calculator screen should change display from 0 to 56', () => {
    // ARRANGE
    render(<Calculator />);
    const button5 = screen.getByText('5');
    const button6 = screen.getByText('6');
    const resultElement = screen.getByTestId('calculator-screen-id');
    // ACT
    fireEvent.click(button5);
    fireEvent.click(button6);
    // ASSERT
    expect(resultElement).toMatchSnapshot();
    expect(resultElement).toHaveTextContent('56');
  });
  it(`If buttons 5 and + are pressed,
  Then we press 6 button and then =, Calculator screen should change display from 0 to 11`, () => {
    // ARRANGE
    render(<Calculator />);
    const button5 = screen.getByText('5');
    const button6 = screen.getByText('6');
    const additionButton = screen.getByText('+');
    const equalButton = screen.getByText('=');
    const resultElement = screen.getByTestId('calculator-screen-id');
    // ACT
    fireEvent.click(button5);
    fireEvent.click(additionButton);
    fireEvent.click(button6);
    fireEvent.click(equalButton);
    // ASSERT
    expect(resultElement).toMatchSnapshot();
    expect(resultElement).toHaveTextContent('11');
  });
  it(`If buttons 5 and - are pressed,
  Then we press 6 button and then =, Calculator screen should change display from 0 to -1`, () => {
    // ARRANGE
    render(<Calculator />);
    const button5 = screen.getByText('5');
    const button6 = screen.getByText('6');
    const substractionButton = screen.getByText('-');
    const equalButton = screen.getByText('=');
    const resultElement = screen.getByTestId('calculator-screen-id');
    // ACT
    fireEvent.click(button5);
    fireEvent.click(substractionButton);
    fireEvent.click(button6);
    fireEvent.click(equalButton);
    // ASSERT
    expect(resultElement).toMatchSnapshot();
    expect(resultElement).toHaveTextContent('-1');
  });
  it(`If buttons 5 and x are pressed,
  Then we press 6 button and then =, Calculator screen should change display from 0 to 30`, () => {
    // ARRANGE
    render(<Calculator />);
    const button5 = screen.getByText('5');
    const button6 = screen.getByText('6');
    const multiplyButton = screen.getByText('×');
    const equalButton = screen.getByText('=');
    const resultElement = screen.getByTestId('calculator-screen-id');
    // ACT
    fireEvent.click(button5);
    fireEvent.click(multiplyButton);
    fireEvent.click(button6);
    fireEvent.click(equalButton);
    // ASSERT
    expect(resultElement).toMatchSnapshot();
    expect(resultElement).toHaveTextContent('30');
  });
});
