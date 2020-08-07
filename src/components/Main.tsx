import React from 'react';
import {  Switch , withRouter} from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import { createFromIconfontCN } from '@ant-design/icons';
import { Layout  } from 'antd';
import routes from '../router/router';

import MenuSider from './MenuSider';

const { Header, Content } = Layout;

const IconFont = createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_1950826_tnscspygocc.js',
});

class Main extends React.Component<any,any> {
    constructor(props:any){
        super(props)
        this.state = {
            selectedKeys: [this.props.location.pathname] || ['/home'],
            openKeys : ['/'+this.props.location.pathname.split('/')[1]]
        }
    }

    menuClick = (routeItem:any) => {
        let path = routeItem.key || '/home'
        this.setState((state:any)=> ({
            selectedKeys : [path],
            openKeys: ['/'+path.split('/')[1]]
        }))
        this.props.history && this.props.history.push(path)
    }
    render(){
        return (
            <div className="flex-column height-100">
              <Layout className="width-100 height-100">
                <Header className="header f-20 color-f">
                  <IconFont type="icon-quhaidaowan" className="header-icon margin-top-15 margin-right-20"/>
                  React Demo
                </Header>
                <Layout>
                  <MenuSider routes={routes} selectedKeys={this.state.selectedKeys} openKeys={this.state.openKeys} tabClick={this.menuClick}></MenuSider>
                  <Layout style={{ padding: '0 24px 24px' }}>
                    <Content className="site-layout-background padding-24">
                        <div className="width-100 height-100 flex-column">
                            <Switch>
                                {renderRoutes(routes)} 
                                {/* {renderRoutes(this.renderFirstLevRoutes(routes))} */}
                            </Switch>
                        </div>
                    </Content>
                  </Layout>
                </Layout>
              </Layout>
            </div>
          )
    }
}


export default withRouter(Main)