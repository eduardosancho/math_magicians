import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import './App.css';
import { LoremIpsum } from 'react-lorem-ipsum';
import Calculator from './components/Calculator';

const App = () => (
  <div className="App">
    <header className="App-header">Header</header>
    <nav>
      <h1>Math Magicians</h1>
      <Link to="/">Home</Link>
      <Link to="/myCalculator">Calculator</Link>
      <Link to="/quote">Quote</Link>
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
        <h2>Who are we?</h2>
        <p>
          That feels like an existential question, don`t you think?
        </p>
      </main>
      <body>
        <Calculator />
      </body>
    </>
  );
}

function Quote() {
  return (
    <>
      <main>
        <p>Place a quote here!</p>
      </main>
    </>
  );
}

export default App;
