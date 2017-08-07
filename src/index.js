// Import the React stuff
import React from 'react';
import ReactDOM from 'react-dom';

// Redux stuff
import { createStore } from 'redux';
import { Provider } from 'react-redux';

// Import the main app body
import App from './components/app';
import rootReducer from './reducers';

// Main store object for storing data
const store = createStore(rootReducer);
store.subscribe(() => console.log('store', store.getState()));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root'));