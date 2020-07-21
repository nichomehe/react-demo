import React from 'react';

class DetailQueryState extends React.Component<any,any> {
    constructor(props: Readonly<any>){
        super(props)
        this.state = {
            query_msg:'',
            state_msg:''
        }

    }
    componentWillMount(){
        if(this.props.location.query){
            this.setState({
                query_msg:this.props.location.query.query_msg
            })
        }else if(this.props.location.state){
            this.setState({
                state_msg:this.props.location.state.state_msg
            })
        } 
    }
   
    render() {
        return (
            <div>
                {
                   this.state.query_msg ?
                    (
                        <div>
                            DetailQuery
                            <div>这是路由接收到的参数-query：
                                <span className="color-red">{this.state.query_msg}</span>
                            </div>
                            <div className="color-9 margin-top-20">参数地址栏不显示，刷新地址栏，参数丢失</div>
                        </div>
                    ): 
                   this.state.state_msg ?
                    (
                        <div>
                            DetailState
                            <div>这是路由接收到的参数-state：
                                <span className="color-red">{this.state.state_msg}</span>
                            </div>
                            <div className="color-9 margin-top-20">参数地址栏不显示，刷新地址栏，参数不丢失</div>
                        </div>
                    ): 
                    (
                        <div>未收到参数哦～</div>
                    )
                }

            </div>

        );
    }
}

export default DetailQueryState;
