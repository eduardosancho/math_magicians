import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import './App.css';
import { LoremIpsum } from 'react-lorem-ipsum';
import Calculator from './components/Calculator';

const App = () => (
  <div className="App">
    <nav>
      <h1>Math Magicians</h1>
      <ul>
        <Link to="/">Home</Link>
        <Link to="/myCalculator">Calculator</Link>
        <Link to="/quote">Quote</Link>
      </ul>
    </nav>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="myCalculator" element={<MyCalculator />} />
      <Route path="quote" element={<Quote />} />
    </Routes>
  </div>
);

function Home() {
  return (
    <>
      <main>
        <h2>Welcome to our homepage!</h2>
        <LoremIpsum p={2} />
      </main>
    </>
  );
}

function MyCalculator() {
  return (
    <>
      <main>
        <div className="calculator-container">
          <h2>Lets do some math!</h2>
          <Calculator />
        </div>
      </main>
    </>
  );
}

function Quote() {
  return (
    <>
      <main>
        <div className="quote-container">
          <p>
            Mathematics is not about numbers, equations, computations,
            or algorithms; it is about understanding. -William Paul Thurston
          </p>
        </div>
      </main>
    </>
  );
}

export default App;
