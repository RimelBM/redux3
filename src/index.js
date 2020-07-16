import React from "react";
import { render } from "react-dom";
import { Provider } from 'react-redux';
import {createStore} from 'redux';
import reducer from './reducers/CounterReducer'
import App from './App'
import store from './store'


render(
      <Provider store={store}>
        <App/>
      </Provider> , document.getElementById("root"));