// Import the React stuff
import React from 'react';
import ReactDOM from 'react-dom';

// Redux stuff
import { createStore, applyMiddleware  } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

// Import the main app body
import App from './components/app';
import rootReducer from './reducers';

// Main store object for storing data. Also add middleware for async and intermediate functions
const store = createStore(rootReducer, applyMiddleware(thunk));
store.subscribe(() => console.log('store', store.getState())); // Log any updates to the store

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root'));