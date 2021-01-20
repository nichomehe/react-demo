import React from 'react';
import { RedditCircleFilled  } from '@ant-design/icons';
import { Layout, Menu } from 'antd';
const { SubMenu } = Menu;
const {  Sider } = Layout;

//声明props类型
interface MenuSiderPropsTypes {
    routes:Array<any>,
    [key:string]:any
}

//声明state类型
interface MenuSiderStateTypes {
    [key:string]:any
}

class MenuSider extends React.Component<MenuSiderPropsTypes,MenuSiderStateTypes> {
    constructor(props: Readonly<MenuSiderPropsTypes>){
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
    //递归生成左侧菜单
    formSubmenusChild(routeItem:any){
        if(routeItem.meta && routeItem.meta.title){
            let childArray = routeItem.children
            if(childArray && childArray.length>0) {
                let cHtml = childArray.map((item:any) => {
                    return this.formSubmenusChild(item);
                });
                return <SubMenu key={routeItem.path} title={routeItem.meta.title || ''} icon={<RedditCircleFilled />}>{cHtml}</SubMenu>
            }else{
                return <Menu.Item key={routeItem.path} >{routeItem.meta.title || ''}</Menu.Item>
            }
        }
    }
    
    render() {
        let routes = this.props.routes || []
        return (
            <div>
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
                        routes.map( (routeItem:any) => {
                            let firstTab   //一级菜单
                            if(routeItem.meta){
                                if(routeItem.children && routeItem.children.length){
                                    firstTab =  this.formSubmenusChild(routeItem)
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

export default MenuSider;
