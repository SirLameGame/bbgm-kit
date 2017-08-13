import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/Root/Root';
import { Provider } from 'react-redux';
import { createStore} from 'redux';
import appReducer from './reducers';
//import registerServiceWorker from './registerServiceWorker';

let store = createStore(appReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
<Provider store={store}>
  <Root />
</Provider>, document.getElementById('root'));
//registerServiceWorker();
