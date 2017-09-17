import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/Root/Root';
import { Provider } from 'react-redux';
import { createStore} from 'redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import appReducer from './reducers';
//import registerServiceWorker from './registerServiceWorker';

let store = createStore(appReducer, window.devToolsExtension ? window.devToolsExtension() : f => f);

ReactDOM.render(
<Provider store={store}>
  <MuiThemeProvider>
    <Root />
  </MuiThemeProvider>
</Provider>, document.getElementById('root'));
//registerServiceWorker();
