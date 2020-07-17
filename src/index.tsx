import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import * as serviceWorker from './serviceWorker';

import MenuSider from './components/MenuSider'

import 'antd/dist/antd.css';
import './index.css';
import './common/css/common.less';
import routes from './router/router';

import { createFromIconfontCN } from '@ant-design/icons';
import { Layout , Breadcrumb } from 'antd';

const { Header, Content } = Layout;

const IconFont = createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_1950826_tnscspygocc.js',
});


ReactDOM.render(
  (
    <div className="flex-column height-100">
    <Layout className="width-100 height-100">
        <Header className="header f-20 color-f">
          <IconFont type="icon-quhaidaowan" className="header-icon margin-top-15 margin-right-20"/>
          React Demo
        </Header>
        <Layout>
          <MenuSider routes={routes}></MenuSider>
          <Layout style={{ padding: '0 24px 24px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>List</Breadcrumb.Item>
              <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb>
            <Content
              className="site-layout-background"
              style={{
                padding: 24,
                margin: 0,
                minHeight: 280,
              }}
            >
              <BrowserRouter>
                <div className="width-100 flex-1 flex-column">
                  {renderRoutes(routes)}
                </div>
              </BrowserRouter>
            </Content>
          </Layout>
        </Layout>
      </Layout>
    </div>
  ),
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
