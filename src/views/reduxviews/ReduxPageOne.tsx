import React from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types'


class ReduxPageOne extends React.Component<any,any> {
    constructor(props: Readonly<any>){
        super(props)
        this.state = {
            
        }
    }

    static propTypes = {
        themeColor: PropTypes.string
    }

    componentDidMount(){
      debugger
    }

    render() {
        return (
            <div>
                ReduxPageOne
            </div>

        );
    }
}
const mapStateToProps = (state:any)=>{
    return {...state}
}
export default connect(mapStateToProps)(ReduxPageOne)
