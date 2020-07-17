import React from 'react';
import { UserOutlined  } from '@ant-design/icons';
import { Layout, Menu } from 'antd';
const { SubMenu } = Menu;
const {  Sider } = Layout;

//声明props类型
interface PropsTypes {
    routes:any,
    [key:string]:any
}

//声明state类型
interface ComAStateTypes {
    [key:string]:any
}

class SiderMenu extends React.Component<PropsTypes,ComAStateTypes> {
    constructor(props: Readonly<PropsTypes>){
        super(props)
        this.state = {

        }
    }
    tabClick = (routeItem:any)=>{
        let path = routeItem.key || '/home'
        debugger
        // this.context.router.history.push(path)
    }
    
    render() {
        return (
            <div>
                <Sider width={200} className="height-100 site-layout-background">
                    <Menu
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    style={{ height: '100%', borderRight: 0 }}
                    onClick={this.tabClick}
                    >
                    {
                        this.props.routes.map( (routeItem:any) => {
                        let menuTab 
                        if(routeItem.meta){
                            if(routeItem.children && routeItem.children.length){
                            menuTab =  
                                <SubMenu  key={routeItem.path} icon={<UserOutlined />} title={routeItem.meta.title || ''}>
                                {
                                    routeItem.children.map((childItem:any) => {
                                    let childTab
                                    childItem.meta &&  (childTab = <Menu.Item key={childItem.path}>{childItem.meta.title || ''}</Menu.Item>)
                                    return childTab
                                    })
                                }
                                </SubMenu>
                            }else{
                            menuTab = <Menu.Item  key={routeItem.path} icon={<UserOutlined />}>{routeItem.meta.title || ''}</Menu.Item>
                            }
                        }
                        return menuTab
                        })
                    }
                    </Menu>
                </Sider>
            </div>

        );
    }
}

export default SiderMenu;
