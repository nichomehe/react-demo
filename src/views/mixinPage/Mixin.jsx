import React from 'react';
import mixins from '../../mixins/index.jsx'



@mixins
class Mixin extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            test:"1111"
        }
    }
    


    

    render() {
        debugger
        
        return (
            <div>
                11111
                {/* Mixin */}
                
                
            </div>

        );
    }
}

export default Mixin