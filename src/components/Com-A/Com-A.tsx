import React from 'react';
import './coma.less'
import style from './coma.module.less' //css模块化

//声明props类型
interface ComAPropsTypes {
    msg?:string,
    onInputChange?:any
}

//声明state类型
interface ComAStateTypes {
    [key:string]:any
}

class ComA extends React.Component<ComAPropsTypes,ComAStateTypes> {
    constructor(props: Readonly<ComAPropsTypes>){
        super(props)
        this.state = {
            a:"state-a",
            b:"state-b",
        }

    }
    num:number = 2
    list = [1,2,3,4]
    add = () => {
        this.setState({
            num:++this.num
        })
    }
    inputChange = (e:any)=>{
        this.props.onInputChange && this.props.onInputChange(e.target.value)
    }
    render() {
        return (
            <div>
                <div className="com-a">
                    Com-A======
                    {this.props.msg}
                </div>
                <div className="com-a">
                    state======
                    {this.state.a}
                </div>
                <div>
                    {this.list.map((item:any) =>{
                        return <p key={item}>{item}</p>
                    })}
                </div>
                <div className={style.button}>
                    <div className={style['button-wrap']}>this is less module</div>
                </div>
                <span>{this.num}</span>
                <button onClick={this.add}>add</button>

                <div>
                    <input type="text" onChange={this.inputChange}/>
                </div>
            </div>

        );
    }
}

export default ComA;
