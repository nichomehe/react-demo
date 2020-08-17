import React from 'react';
import { Button } from 'antd'

class RouterTwo extends React.Component<any,any> {
    constructor(props: Readonly<any>){
        super(props)
        this.state = {

        }

    }
    routerToDetailUrl = ()=>{
        // debugger
        this.props.history.push({ pathname: '/routers/detailurl/Nicole'})
    }
    routerToDetailQuery = ()=>{
        //参数地址栏不显示，刷新地址栏，参数丢失
        this.props.history.push({ pathname: '/routers/detailquerystate', query: { query_msg: ' 我是来自前一个路由的消息～query' } })
    }
    routerToDetailState = ()=>{
        //参数地址栏不显示，刷新地址栏，参数不丢失
        this.props.history.push({ pathname: '/routers/detailquerystate',state: { state_msg: ' 我是来自前一个路由的消息～state' } })
    }
   
    render() {
        return (
            <div>
                路由传参
                <div>
                    <Button type="dashed" className="margin-top-20" onClick={this.routerToDetailUrl}>路由跳转并传参-url</Button>
                </div>
                <div>
                    <Button type="dashed" className="margin-top-20" onClick={this.routerToDetailQuery}>路由跳转并传参-query</Button>
                </div>
                <div>
                    <Button type="dashed" className="margin-top-20" onClick={this.routerToDetailState}>路由跳转并传参-state</Button>
                </div>
            </div>

        );
    }
}

export default RouterTwo;