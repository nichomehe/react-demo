import React from 'react';
import eventBus from './eventBus'

class Customer extends React.Component<any,any> {
    constructor(props: Readonly<any>){
        super(props)
        this.state = {
            msg:''
        }
    }

    componentWillMount(){
        eventBus.addListener('emitMsg',(emitMsg)=>{
            this.setState({
                msg:emitMsg
            })
        })
    }

    render() {
        return (
            <div>
                <span>Customer</span>
                {
                    this.state.msg &&  
                    (  
                        <span className="color-red margin-left-10">收到来自emitter的消息----{this.state.msg}</span>
                    )
                }
            </div>

        );
    }
}

export default Customer;
