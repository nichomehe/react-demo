import React from 'react';
import mixins from '../../mixins/index.jsx'
import { Button } from 'antd'


@mixins
class MixinPage extends React.Component<any,any>{
    constructor(props:Readonly<any>){
        super(props)
        this.state = {}
    }
    render() {   
        return (
            <div>
                {/* Mixin */}
                <div className="margin-bottom-20">这是来自mixin的消息：<span className="color-red">{this.props.mixinMsg}</span></div>
                <Button type="dashed" onClick={this.props.alertMixinMsg}>mixin的alert</Button>
            </div>
        );
    }
}
　
export default MixinPage