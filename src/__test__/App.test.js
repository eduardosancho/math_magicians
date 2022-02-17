import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from '../App';

describe('Test Router behaviour', () => {
  it('When user presses Quote in navbar it will render Quote page', () => {
    const { container } = render(
      <BrowserRouter>
        <App />
      </BrowserRouter>,
    );
    const quoteLink = screen.getByText('Quote');
    fireEvent.click(quoteLink);
    const main = container.querySelector('main');
    expect(main).toMatchSnapshot();
  });

  it('When user presses Home in navbar it will render Home page', () => {
    const { container } = render(
      <BrowserRouter>
        <App />
      </BrowserRouter>,
    );
    const homeLink = screen.getByText('Home');
    fireEvent.click(homeLink);
    const main = container.querySelector('main');
    expect(main).toMatchSnapshot();
  });

  it('When user presses Calculator in navbar it will render Calculator page', () => {
    const { container } = render(
      <BrowserRouter>
        <App />
      </BrowserRouter>,
    );
    const calculatorLink = screen.getByText('Calculator');
    fireEvent.click(calculatorLink);
    const main = container.querySelector('main');
    expect(main).toMatchSnapshot();
  });
});
