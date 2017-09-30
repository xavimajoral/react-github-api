import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import promiseMiddleware from 'redux-promise-middleware';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from './components/Header/Header';
import App from './containers/App/App';
import UserDetail from './containers/UserDetail/UserDetail';
import reducers from './reducers';

import 'bootstrap/dist/css/bootstrap.css';

const createStoreWithMiddleware = createStore(reducers, composeWithDevTools(
  applyMiddleware(promiseMiddleware())
));

ReactDOM.render(
  <Provider store={createStoreWithMiddleware}>
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/user/:id" component={UserDetail} />
          <Route path="/" component={App} />
        </Switch>
      </div>
    </Router>
  </Provider>
  , document.getElementById('root')
);
