import React from 'react';
import Consumer from './children/Consumer'
import NewContext from './context'

class NewProducer extends React.Component<any,any> {
    constructor(props: Readonly<any>){
        super(props)
        this.state = {
            msg:'来自NewContext-Provider'
        }
    }

    
    render() {
        return (
            <NewContext.Provider value={{msg:this.state.msg}}>
                <div>
                    <div className="margin-bottom-20">NewProducer</div>
                    <Consumer/>
                </div>
            </NewContext.Provider>
        );
    }
}

export default NewProducer;
