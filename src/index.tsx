import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import { createStore  } from 'redux';
import allReducers from './store/reducers'
import Main from './components/Main'

import 'antd/dist/antd.css';
import './index.css';
import './common/css/common.less';


import fetch from './common/js/fetch'

(React.Component.prototype as any).$fetch = fetch

const store = createStore(allReducers)

ReactDOM.render( 
  (
    <Provider store={store}>
      <BrowserRouter>
        <Main/>
      </BrowserRouter>
    </Provider>
  ) ,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
