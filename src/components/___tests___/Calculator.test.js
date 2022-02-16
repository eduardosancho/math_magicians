import React from 'react';
import '@testing-library/jest-dom/extend-expect'
import { render, screen, fireEvent } from '@testing-library/react';
import { prettyDOM } from '@testing-library/dom';
import Calculator from '../Calculator.js';

describe('Test render of Calculator component', () => {
  it('Calculator elements are rendered correctly', () => {
    const { container } = render(<Calculator />);
    expect(container).toMatchSnapshot();
  });
  
  it('If buttons 5 and 6 are pressed, Calculator screen should change display from 0 to 56', () => {
    //ARRANGE
    render(<Calculator />)
    const button5 = screen.getByText('5');
    const button6 = screen.getByText('6');
    const resultElement = screen.getByTestId('calculator-screen-id')
    //ACT
    fireEvent.click(button5);
    fireEvent.click(button6);
    //ASSERT
    expect(resultElement).toMatchSnapshot();
    expect(resultElement).toHaveTextContent('56');
  });

});