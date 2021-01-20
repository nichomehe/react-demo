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
import { on , emit} from './common/js/eventEmitter'


/*
* 组件生命周期执行顺序
* [加载]   constructor -> componentWillMount -> render -> componentDidMount
* [传递props改变]   componentWillReceiveProps -> shouldComponentUpdate -> componentWillUpdate -> render -> componentDidUpdate
* [state改变]   shouldComponentUpdate -> componentWillUpdate -> render -> componentDidUpdate
* [自身 forceUpdate]  componentWillUpdate -> render -> componentDidUpdate
* [父组件 forceUpdate]  == [传递props改变]
*/

React.Component.prototype.$fetch = fetch
React.Component.prototype.$on = on
React.Component.prototype.$emit = emit


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









// 项目创建  =》 webpack配置文件  =》  index入口文件   =》  组件声明   =》   react几大特性   =》   生命周期  =》 
// 路由  =》  组件通信（4）  =》  mixin（装饰器 高阶组件）   =》   css模块化




// 有嵌套关系的（父子/在一条垂直组件链上的）：props、eventBus、context、redux
// 没嵌套关系的（兄弟/父组件不是同一个的）：eventBus、redux



// dialog 1:组件===== ReactDom.createPotral   2:函数====== 