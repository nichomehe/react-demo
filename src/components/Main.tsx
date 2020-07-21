import React from 'react';
import {  BrowserRouter , Switch , withRouter} from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import { createFromIconfontCN } from '@ant-design/icons';
import { Layout  } from 'antd';
import routes from '../router/router';

import MenuSider from './MenuSider'

const { Header, Content } = Layout;

const IconFont = createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_1950826_tnscspygocc.js',
});

class Main extends React.Component<any,any> {
    // eslint-disable-next-line @typescript-eslint/no-useless-constructor
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

    // 递归 将子路由children提出来和父路由一级进行注册
    renderFirstLevRoutes(routes:Array<any>,targetRoutes:Array<any>=routes){
      let self = this
      let firstLevelRoutes = [...targetRoutes]
      routes.forEach((route:any)=>{
        if(route.children && route.children.length){
          firstLevelRoutes = firstLevelRoutes.concat([...route.children])
          firstLevelRoutes = self.renderFirstLevRoutes(route.children,firstLevelRoutes)
        }
      })
      return firstLevelRoutes
    }
    render(){
        // debugger
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
                      <BrowserRouter key={this.props.location.key}>
                        <div className="width-100 flex-1 flex-column">
                            <Switch>
                                {renderRoutes(this.renderFirstLevRoutes(routes))}
                            </Switch>
                        </div>
                      </BrowserRouter>
                    </Content>
                  </Layout>
                </Layout>
              </Layout>
            </div>
          )
    }
}


export default withRouter(Main)