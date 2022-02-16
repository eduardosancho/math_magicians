import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import './App.css';
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
        <p>
          Lorem ipsum odor amet, consectetuer adipiscing elit. Hac luctus mi et neque non
          interdum nisi dapibus. Natoque vestibulum penatibus consectetur purus neque
          nullam. Ante sodales fermentum varius, sodales curabitur fames eros. Habitant
          rutrum tincidunt at luctus nam cubilia. Himenaeos facilisi suspendisse libero
          ac massa viverra potenti condimentum. Habitasse non hac lacinia; vulputate eget
          amet libero placerat. Facilisi gravida dapibus elementum arcu justo lacus felis.
        </p>
        <p>
          Venenatis dictum odio auctor consectetur cursus tristique habitasse feugiat.
          In nisl duis congue rhoncus egestas congue a. Faucibus aliquet fames nascetur
          orci placerat vehicula nunc. Mollis mauris class fames malesuada; molestie
          curabitur senectus. Tempor etiam cursus diam dolor mattis convallis himenaeos.
          Tortor varius nullam malesuada primis lacinia nascetur proin aliquam porttitor.
          Vel dui pretium ullamcorper pellentesque nisi per montes vehicula.
        </p>
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
