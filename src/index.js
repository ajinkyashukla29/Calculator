import React, { Component } from 'react';
import { render } from 'react-dom';
import { Provider } from "react-redux";

import store from "./store";
import Calculator from './components/Calculator/Calculator';
import './style.css';
import './polyfills';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div>
        <Calculator />
      </div>
    );
  }
}

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
