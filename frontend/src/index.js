import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import {Provider} from 'react-redux'
import store from './store'
import App from './App';
import reportWebVitals from './reportWebVitals';
import Productpage from './pages/Product/Productpage';
import Products from './pages/products/products';
import ProductsC from './components/ProductsC';
ReactDOM.render(
  <Provider store={store}>
      <App/>
  </Provider>,
  document.getElementById('root')
);


reportWebVitals();
