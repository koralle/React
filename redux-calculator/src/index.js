import React from 'react';
import ReactDOM from 'react-dom';
import CalculatorContainer from './containers/CalculatorContainer';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers';

const store = createStore(reducer);

ReactDOM.render(
    <Provider store={store}>
        <CalculatorContainer />
    </Provider>,
    document.getElementById('root')

);


