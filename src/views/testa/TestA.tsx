import React from 'react';
import {withRouter} from "react-router-dom";


class TestA extends React.Component<any,any> {
    constructor(props: Readonly<any>){
        super(props)
        this.state = {

        }
    }


   
    render() {
        return (
            <div>
                <div>TestA</div>
            </div>

        );
    }
}

export default withRouter(TestA);
