import React from 'react';
import {  BrowserRouter  , Switch , Route , Link} from 'react-router-dom';

import ChildOne from './children/ChildOne'

class RouterOne extends React.Component<any,any> {
    constructor(props: Readonly<any>){
        super(props)
        this.state = {

        }

    }
   
    render() {
        return (
            <div>
                <BrowserRouter>
                    <div className="margin-bottom-20">
                        TestADetail-One
                        <Link className="margin-left-15" to="/routers/routerone/one">show ChildOne</Link>
                    </div>
                    <Switch>
                        {/* 子路由页面 类似vue的 router-view 的作用 */}
                        <Route exact path="/routers/routerone/one" component={ChildOne} />    
                    </Switch>
                </BrowserRouter>
            </div>

        );
    }
}

export default RouterOne;
