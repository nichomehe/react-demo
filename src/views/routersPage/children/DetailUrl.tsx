import React from 'react';

class DetailUrl extends React.Component<any,any> {
    constructor(props: Readonly<any>){
        super(props)
        this.state = {
            name:''
        }

    }
    componentWillMount(){
        if(this.props.match.params){
            this.setState({
                name:this.props.match.params.name
            })
        }
        
    }
   
    render() {
        
        return (
            <div>
                DetailUrl
                <div>这是路由接收到的name：
                    <span className="color-red">{this.state.name}</span>
                </div>
            </div>

        );
    }
}

export default DetailUrl;
