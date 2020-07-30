import React from 'react';
import {withRouter} from "react-router-dom";
import style from './css/test.module.less'  //css模块化

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
                <div className={style.red}>局部css</div>

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
