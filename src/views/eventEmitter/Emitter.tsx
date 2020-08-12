import React from 'react';
import { Button } from 'antd';
import EventEmitter from './eventEmitter'
import Customer from './Customer'

class Emitter extends React.Component<any,any> {
    constructor(props: Readonly<any>){
        super(props)
        this.state = {

        }
    }

    emitMsg = () => {
        EventEmitter.emit('emitMsg','我是Emitter发出的消息噢～')
    }
    
    render() {
        return (
            <div>
                <div className="margin-bottom-20">
                    <span className="margin-right-20">Emitter</span>
                    <Button shape="round" type="primary" onClick={this.emitMsg}>emit</Button>
                </div>
                <Customer/>
            </div>

        );
    }
}

export default Emitter;
