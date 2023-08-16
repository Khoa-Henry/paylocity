import React from 'react';
import Logo from './paylocitylogo.png';
// import Dashboard from './Components/Dashboardpage/DashBoard';
// import Signup from './Signup';
// import App from './App';
// import ToDo from './Components/Todopage/Todo';
// import Clocking from './Components/PunchTime/Clocking';
// import Community from './Components/Communitypage/Community';
// import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import {Link} from 'react-router-dom';

export default class Loading extends React.Component{
    render(){
        return(
        
                
                <div className="ui center aligned stackable grid" style={{paddingTop:"40%"}}>
                    <img className="ui center aligned small image" src={Logo} alt="logo"/>
                    <div className="column">
                        <div style={{paddingTop:"50%"}}>
                            <Link to='/login'><button className="ui inverted orange basic button">Continue</button></Link>
                        </div>  
                        <div style={{paddingTop:"40%"}}>
                            <h3>Welcome</h3>
                            <p >"TOGETHER DREAM BIG, START SMALL"</p>   
                        </div>
                    </div>
                </div>
            
        )
    };
};
