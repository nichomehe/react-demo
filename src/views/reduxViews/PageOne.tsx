import React from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import {Button} from 'antd'
import {changeThemeColor , changeFontSize } from '../../redux/action'

// 读取 store 内的数据
const mapStateToProps = (state:any)=>{
    // 组件内 this.props.themeColor 取值
    return {
        themeColor:state.theme.themeColor,
        fontSize:state.fontSize.fontSize
    }
    // return {...state}
    // 得到的state
    // state = {
    //     theme:{thmeColor:'red'},
    //     fontSize:{fontSize:14}
    // }
}
const mapDispatchToProps = (dispatch: any) => ({
    // 组件内 this.props.setThemeColor(color) 调用
    setThemeColor: (themeColor:string) => dispatch(changeThemeColor(themeColor)),
    setFontSize: (fontSize:string|number) => dispatch(changeFontSize(fontSize))
})

@(connect( mapStateToProps , mapDispatchToProps ) as any)
class ReduxPageOne extends React.Component<any,any> {
    constructor(props: Readonly<any>){
        super(props)
        this.state = {
            
        }
    }

    static propTypes = {
        themeColor: PropTypes.string
    }


    colorBtnClick = () => {
        this.props.setThemeColor('green')
    }
    fontBtnClick = () => {
        this.props.setFontSize(18)
    }

    render() {
        return (
            <div>
                {/* ReduxPageOne */}
                <div className="margin-bottom-20">
                    <p className="margin-bottom-20">themeColor:{this.props.themeColor}</p>
                    <Button type="dashed" onClick={this.colorBtnClick}>修改 themeColor 为 green</Button>
                </div>
                <div className="margin-bottom-20">
                    <p className="margin-bottom-20">fontSize:{this.props.fontSize}</p>
                    <Button type="dashed" onClick={this.fontBtnClick}>修改 fontSize 为 18</Button>
                </div>
                
            </div>

        );
    }
}

// export default connect(mapStateToProps)(ReduxPageOne)
export default ReduxPageOne