import React from 'react';
import PropTypes from 'prop-types'
import Consumer from './children/Consumer'
class Producer extends React.Component<any,any> {
    // 声明Context对象属性
    static childContextTypes = {
        title: PropTypes.string,
        methodA: PropTypes.func
    }
    // 返回Context对象，方法名固定的  之后子孙组件 通过声明后都可this.context获取
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
                <div className="margin-bottom-20">Producer</div>
                <Consumer/>
            </div>

        );
    }
}

export default Producer;
