import React from 'react';
import PropTypes from 'prop-types'
import Consumer from './children/Consumer'
class OldProducer extends React.Component<any,any> {
    // 父组件在getChildContext方法中定义数据的时候，一定要先在childContextTypes中进行声明，否则会报错
    static childContextTypes = {
        title: PropTypes.string,
        methodA: PropTypes.func
    }
    // 返回context对象，方法名固定  子孙组件通过声明类型后可this.context获取
    getChildContext () {
        return {
            title: 'producer-title',
            methodA: () => 'producer-method'
        }
    }
    
    constructor(props: Readonly<any>){
        super(props)
        this.state = {
            
        }
    }

    
    render() {
        return (
            <div>
                <div className="margin-bottom-20">OldProducer</div>
                <Consumer/>
            </div>

        );
    }
}

export default OldProducer;
