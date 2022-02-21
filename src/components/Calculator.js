import React, { useState } from 'react';
import './Calculator.css';
import calculate from '../logic/calculate';

const Calculator = () => {
  const initialItems = {
    total: '0',
    next: null,
    operation: null,
  };

  const [items, setItems] = useState(initialItems);

  const handleClick = (event) => setItems(calculate(items, event.target.value));

  return (
    <>
      <div className="calculator">
        <div className="calculator-screen gray" data-testid="calculator-screen-id">
          {items.total !== null ? items.total : null}
          {items.operation !== null ? items.operation : null}
          {items.next !== null ? items.next : null}
        </div>

        <button type="button" className="operator divide orange" value="÷" onClick={handleClick}>&divide;</button>
        <button type="button" className="operator multiply orange" value="x" onClick={handleClick}>&times;</button>
        <button type="button" className="operator substract orange" value="-" onClick={handleClick}>-</button>
        <button type="button" className="operator add orange" value="+" onClick={handleClick}>+</button>
        <button type="button" className="equal-sign orange" value="=" onClick={handleClick}>=</button>

        <button type="button" className="all-clear" value="AC" onClick={handleClick}>AC</button>
        <button type="button" className="invert-sign" value="+/-" onClick={handleClick}>+/-</button>
        <button type="button" className="percentage" value="%" onClick={handleClick}>%</button>

        <button type="button" className="number-key zero" value="0" onClick={handleClick}>0</button>
        <button type="button" className="number-key one" value="1" onClick={handleClick}>1</button>
        <button type="button" className="number-key two" value="2" onClick={handleClick}>2</button>
        <button type="button" className="number-key three" value="3" onClick={handleClick}>3</button>
        <button type="button" className="number-key four" value="4" onClick={handleClick}>4</button>
        <button type="button" className="number-key five" value="5" onClick={handleClick}>5</button>
        <button type="button" className="number-key six" value="6" onClick={handleClick}>6</button>
        <button type="button" className="number-key seven" value="7" onClick={handleClick}>7</button>
        <button type="button" className="number-key eight" value="8" onClick={handleClick}>8</button>
        <button type="button" className="number-key nine" value="9" onClick={handleClick}>9</button>

        <button type="button" className="decimal" value="." onClick={handleClick}>.</button>

      </div>
    </>
  );
};

export default Calculator;
