import React from 'react';
import {Route , BrowserRouter , Switch , withRouter} from "react-router-dom";
import DetailOne from './children/DetailOne'
import DetailTwo from './children/DetailTwo'

class TestA extends React.Component<any,any> {
    constructor(props: Readonly<any>){
        super(props)
        this.state = {
            isChild:false
        }
        console.log(this.props)

    }

    toDetail = (num:number) => {
        // debugger
        this.setState({
            isChild:true
        })
        let url = num ? '/testa/testadetailtwo' : '/testa/testadetailone'
        this.props.history.push(url)
        console.log(this.props)
    }
   
    render() {
        let isChildren = (this.props.location.pathname === this.props.match.path)
        return (
            <div>
                {
                    isChildren &&
                    <div>
                         <div>TestA</div>
                         <div onClick={()=>{this.toDetail(0)}}>testadetail-one</div>
                         <div onClick={()=>{this.toDetail(1)}}>testadetail-two</div>

                    </div>
                }
                {/* 子路由 */}
                <BrowserRouter key={this.props.location.key}>
                    <Switch>
                        <Route exact path="/testa/testadetailone" component={DetailOne} /> 
                        <Route exact path="/testa/testadetailtwo" component={DetailTwo} /> 
                    </Switch>
                </BrowserRouter>

            </div>

        );
    }
}

export default withRouter(TestA);
