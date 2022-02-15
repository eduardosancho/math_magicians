import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Calculator from './components/Calculator';

const App = () => (
  <div className="App">
    <header className="App-header">Header</header>
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
        <h2>Welcome to the homepage!</h2>
        <p>You can do this, I believe in you.</p>
      </main>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/myCalculator">Calculator</Link>
        <Link to="/quote">Quote</Link>
      </nav>
      <Calculator />

    </>
  );
}

function MyCalculator() {
  return (
    <>
      <main>
        <h2>Who are we?</h2>
        <p>
          That feels like an existential question, don\`t you think?
        </p>
      </main>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/myCalculator">Calculator</Link>
        <Link to="/quote">Quote</Link>
      </nav>
    </>
  );
}

function Quote() {
  return (
    <>
      <main>
        <p>Place a quote here!</p>
      </main>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/myCalculator">Calculator</Link>
        <Link to="/quote">Quote</Link>
      </nav>
    </>
  );
}

export default App;
