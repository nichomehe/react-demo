import React from 'react';
import PropTypes from 'prop-types'


class ConsumerDetail extends React.Component<any,any> {
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
            <div>
                <div className="margin-bottom-20">
                    <span>ConsumerDetail</span>
                    <span className="color-red">ConsumerDetail context:{this.context.title}</span>
                </div>
            </div>

        );
    }
}

export default ConsumerDetail;
