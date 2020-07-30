import React  from 'react';

class Home extends React.Component<any,any> {
    constructor(props: Readonly<any>){
        super(props)
        this.state = {
            title:''
        }
    }

    render() {
        return (
            <div>
                Home
            </div>

        );
    }
}

export default Home;
