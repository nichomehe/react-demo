import React from 'react';
import Consumer from './children/Consumer'
import { Provider } from './context'

class NewProducer extends React.Component<any,any> {
    constructor(props: Readonly<any>){
        super(props)
        this.state = {
            msg:'来自NewContext-Provider'
        }
    }

    
    render() {
        return (
            <Provider value={{msg:this.state.msg}}>
                <div>
                    <div className="margin-bottom-20">NewProducer</div>
                    <Consumer/>
                </div>
            </Provider>
        );
    }
}

export default NewProducer;
