import React from 'react';
import { connect } from 'react-redux'
import {Button} from 'antd'
import {changeThemeColor , changeFontSize } from '../../store/action'


//  vue的mapState
const mapStateToProps = (state:any)=>{

    // 组件内 this.props.themeColor 读取
    return {
        themeColor:state.themeColor.themeColor,
        fontSize:state.fontSize.fontSize
    }
}

// vue的mapMutations
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
                    <p className="margin-bottom-20">themeColor:
                        <span className="bg-theme fw padding-10 margin-10" style={{ background:  this.props.themeColor}}>{this.props.themeColor}</span>
                    </p>
                    <Button type="dashed" onClick={this.colorBtnClick}>修改 themeColor 为 green</Button>
                </div>
                <div className="margin-bottom-20">
                    <p className="margin-bottom-20">fontSize:
                        <span className="bg-theme fw padding-10 margin-10" style={{ fontSize:  this.props.fontSize}}>{this.props.fontSize}</span>
                    </p>
                    <Button type="dashed" onClick={this.fontBtnClick}>修改 fontSize 为 18</Button>
                </div>
                
            </div>

        );
    }
}

// export default connect(mapStateToProps)(ReduxPageOne)
export default ReduxPageOne