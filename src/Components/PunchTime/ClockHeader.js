import React from 'react';
import {Link} from 'react-router-dom'

class ClockHeader extends React.Component{
    render(){
        return(
            <div className="ui center aligned block header" >
                <h1>Time Punch</h1>
                <Link to='/dashboard'><a>Back</a></Link>
            </div>
        )
    }
}

export default ClockHeader;