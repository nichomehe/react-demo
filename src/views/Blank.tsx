import React from 'react';
import {  Switch } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';

// 渲染子路由
class Blank extends React.Component<any,any> {
    constructor(props: Readonly<any>){
        super(props)
        this.state = {
        }
    }
    render() {
        // debugger
        return (
            <div className="height-100 width-100">
                {/* <p>Blank</p> */}
                <Switch>
                    {renderRoutes(this.props.route.children)}
                </Switch>
            </div>

        );
    }
}

export default Blank;
