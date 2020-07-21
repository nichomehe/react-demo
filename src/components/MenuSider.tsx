import React from 'react';
import { RedditCircleFilled  } from '@ant-design/icons';
import { Layout, Menu } from 'antd';
const { SubMenu } = Menu;
const {  Sider } = Layout;

//声明props类型
interface SideMenuPropsTypes {
    routes:Array<any>,
    [key:string]:any
}

//声明state类型
interface SideMenuStateTypes {
    [key:string]:any
}

class SiderMenu extends React.Component<SideMenuPropsTypes,SideMenuStateTypes> {
    constructor(props: Readonly<SideMenuPropsTypes>){
        super(props)
        this.state = {

        }
    }
    tabClick = (routeItem:any)=>{
        this.props.tabClick && this.props.tabClick(routeItem)
    }
    subMenuOpenCahnge = (obj:any) => {
        // debugger
    }
    
    render() {
        return (
            <div>
                {/* 支持到三级菜单 */}
                <Sider width={300} className="height-100 site-layout-background">
                    <Menu
                    mode="inline"
                    defaultOpenKeys={['/home']}
                    selectedKeys={this.props.selectedKeys}
                    style={{ height: '100%', borderRight: 0 }}
                    // openKeys = {this.props.openKeys}
                    onClick={this.tabClick}
                    onOpenChange={this.subMenuOpenCahnge}
                    >
                    {
                        this.props.routes.map( (routeItem:any) => {
                            let firstTab   //一级菜单
                            if(routeItem.meta){
                                if(routeItem.children && routeItem.children.length){
                                firstTab =  
                                    <SubMenu  key={routeItem.path} icon={<RedditCircleFilled />} title={routeItem.meta.title || ''}  >
                                    {
                                        routeItem.children.map((childItem:any) => {
                                            let scdTab   // 二级菜单
                                            if(childItem.meta){
                                                if(childItem.children && childItem.children.length){
                                                    scdTab = 
                                                    <SubMenu  key={childItem.path}  title={childItem.meta.title || ''}  >
                                                        {
                                                            // 三级菜单
                                                            childItem.children.map( (ccItem:any) => {
                                                                let thdTab 
                                                                if(ccItem.meta){
                                                                    thdTab = <Menu.Item key={ccItem.path}>{ccItem.meta.title || ''}</Menu.Item>
                                                                }
                                                                return thdTab
                                                            })
                                                        }
                                                    </SubMenu>
                                                }else{
                                                    scdTab = <Menu.Item key={childItem.path}>{childItem.meta.title || ''}</Menu.Item>
                                                }
                                            } 
                                            return scdTab
                                        })
                                    }
                                    </SubMenu>
                                }else{
                                    firstTab = <Menu.Item  key={routeItem.path} icon={<RedditCircleFilled />}>{routeItem.meta.title || ''}</Menu.Item>
                                }
                            }
                            return firstTab
                        })
                    }
                    </Menu>
                </Sider>
            </div>

        );
    }
}

export default SiderMenu;
