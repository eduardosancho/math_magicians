import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">Header</header>
      <body>
        <div className="calculator">
          <input type="text" className="calculator-screen gray" value="0" disabled />

          <button type="button" className="operator divide orange" value="/">&divide;</button>
          <button type="button" className="operator multiply orange" value="*">&times;</button>
          <button type="button" className="operator substract orange" value="-">-</button>
          <button type="button" className="operator add orange" value="+">+</button>
          <button type="button" className="equal-sign orange" value="=">=</button>

          <button type="button" className="all-clear" value="all-clear">AC</button>
          <button type="button" className="invert-sign" value="invert-sign">+/-</button>
          <button type="button" className="percentage" value="percentage">%</button>

          <button type="button" className="number-key zero" value="0">0</button>
          <button type="button" className="number-key one" value="1">1</button>
          <button type="button" className="number-key two" value="2">2</button>
          <button type="button" className="number-key three" value="3">3</button>
          <button type="button" className="number-key four" value="4">4</button>
          <button type="button" className="number-key five" value="5">5</button>
          <button type="button" className="number-key six" value="6">6</button>
          <button type="button" className="number-key seven" value="7">7</button>
          <button type="button" className="number-key eight" value="8">8</button>
          <button type="button" className="number-key nine" value="9">9</button>

          <button type="button" className="decimal" value=".">.</button>

        </div>
      </body>
    </div>
  );
}

export default App;
