import React from 'react';

class ComA extends React.Component<any,any> {
    constructor(props: Readonly<{}>){
        super(props)
        this.state = {
            a:"aaa",
            b:"bbb",
        }

    }
    num:number = 1
    add= ()=>{
        this.setState({
            num:++this.num
        })
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
                <p>{this.num}</p>
                <button onClick={this.add}>add</button>
            </div>

        );
    }
}

export default ComA;
