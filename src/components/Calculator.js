import React, { useState } from 'react';
import './Calculator.css';
import calculate from '../logic/calculate';

const Calculator = () => {
  const initialItems = {
    total: null,
    next: null,
    operation: null,
  };

  const [items, setItems] = useState(initialItems);

  handleClick(event) {
    this.setState((state) => (
      calculate(state, event.target.value)
    ));
  }

  render() {
    const { total, next, operation } = this.state;
    return (
      <>
        <div className="calculator">
          <div className="calculator-screen gray">
            {total !== null ? total : null}
            {operation !== null ? operation : null}
            {next !== null ? next : null}
          </div>

          <button type="button" className="operator divide orange" value="÷" onClick={this.handleClick}>&divide;</button>
          <button type="button" className="operator multiply orange" value="x" onClick={this.handleClick}>&times;</button>
          <button type="button" className="operator substract orange" value="-" onClick={this.handleClick}>-</button>
          <button type="button" className="operator add orange" value="+" onClick={this.handleClick}>+</button>
          <button type="button" className="equal-sign orange" value="=" onClick={this.handleClick}>=</button>

          <button type="button" className="all-clear" value="AC" onClick={this.handleClick}>AC</button>
          <button type="button" className="invert-sign" value="+/-" onClick={this.handleClick}>+/-</button>
          <button type="button" className="percentage" value="%" onClick={this.handleClick}>%</button>

          <button type="button" className="number-key zero" value="0" onClick={this.handleClick}>0</button>
          <button type="button" className="number-key one" value="1" onClick={this.handleClick}>1</button>
          <button type="button" className="number-key two" value="2" onClick={this.handleClick}>2</button>
          <button type="button" className="number-key three" value="3" onClick={this.handleClick}>3</button>
          <button type="button" className="number-key four" value="4" onClick={this.handleClick}>4</button>
          <button type="button" className="number-key five" value="5" onClick={this.handleClick}>5</button>
          <button type="button" className="number-key six" value="6" onClick={this.handleClick}>6</button>
          <button type="button" className="number-key seven" value="7" onClick={this.handleClick}>7</button>
          <button type="button" className="number-key eight" value="8" onClick={this.handleClick}>8</button>
          <button type="button" className="number-key nine" value="9" onClick={this.handleClick}>9</button>

          <button type="button" className="decimal" value="." onClick={this.handleClick}>.</button>

        </div>
      </>
    );
  }
}

export default Calculator;
