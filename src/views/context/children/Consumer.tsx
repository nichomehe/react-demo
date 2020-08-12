import React from 'react';
import PropTypes from 'prop-types'
import ConsumerDetail from './ConsumerDetail'

class Consumer extends React.Component<any,any> {
    //子组件需要通过一个静态属性contextTypes声明后，才可以访问父组件Context对象的属性
    static contextTypes = {
        title: PropTypes.string,
        methodA: PropTypes.func
    }
    constructor(props: Readonly<any>,context: any){
        super(props,context)
        this.state = {

        }
    }
    render() {
        return (
            <div className="bg-f padding-20">
                <div className="margin-bottom-20">
                    <span>Consumer</span>
                    <span className="color-red">Consumer context:{this.context.title}</span>
                </div>
                <ConsumerDetail/>
            </div>

        );
    }
}

export default Consumer;
