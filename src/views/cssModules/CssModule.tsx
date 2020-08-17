import React from 'react';
import {withRouter} from "react-router-dom";
import style from './css/test.module.less'  //css模块化
import './css/test.less'
// 1.避免命名冲突
// 2.避免样式直接作用于全局，影响其他页面


class CssModule extends React.Component<any,any> {
    constructor(props: Readonly<any>){
        super(props)
        this.state = {

        }
    }
    render() {
        return (
            <div>
                {/* 局部css */}
                <div className={style.bgred}>局部css</div>
                <div className="red">font</div>
                {
                /* 局部和全局混合css */
                /* 如果全局css和局部css作用在一个样式上 会采用全局的样式 */
                }
                <div className={`f-20 margin-top-20  ${style['color-green']}`}>局部和全局混合css</div>

            </div>

        );
    }
}

export default withRouter(CssModule);




