import React from 'react';
import {withRouter} from "react-router-dom";
import { Button } from 'antd'

function FuncList (){
    return <div>Component By Func</div>
}


class List  extends React.Component<any,any> {
    constructor(props: Readonly<any>){
        super(props)
        this.state = {
            list:[]
        }
    }
    addListItem = () => {
        this.setState({
            list:[...this.state.list,this.state.list.length+1]
        })
        this.setState((state:any,props:any)=>{

        })
    }
    delListItem = () => {
        let list = this.state.list
        list.pop()
        this.setState({
            list:list
        })
    }
    componentWillMount(){
        // debugger
        this.$fetch({
            url:'mockdata/list'
        }).then((res:any)=>{
            this.setState({
                list:res.data.list || []
            })
        })
    }
    
    
    render() {
        return (
            <div>
                <div>
                    {
                        this.state.list.map((item:number,index:number)=>{
                            return <span className="color-9 f-14 margin-left-10" key={index}>{item}</span>
                        })
                    }
                </div>

                <div className="margin-top-20">
                    <Button className="margin-bottom-10 margin-right-10" onClick={this.addListItem}>add</Button>
                    <Button onClick={this.delListItem}>del</Button>
                </div>
                <FuncList/>
            </div>

        );
    }
}

export default withRouter(List);
