import React, { useEffect } from 'react';
// import DashBoard from './Components/Dashboardpage/DashBoard';
import Logo from './paylocitylogo.png';
import Axios from 'axios'
import {Link} from 'react-router-dom';

function App (props) {
    const [userNameInput, setUserNameInput] = React.useState('')
    const [passwordInput, setPasswordInput] = React.useState('')
    const [err,setErr]= React.useState('')
    const [dashboard, setDashboard] = React.useState('login')
    
    useEffect(()=>{
        Axios({
            method:'get',
            url:'https://5f821b3106957200164331eb.mockapi.io/users',
        }).then(res=>props.setUserData(res.data))
    })




    const login = ()=>{
        let userdata = props.userData.find(i=>i.userName === userNameInput)
        // let newArray = props.userData.findIndex(i=>i.)
        if (!userdata){
            setErr('Cannot find user')
        } else {
            if (userdata.password === passwordInput ){
                setDashboard('/dashboard')
                
                props.setCurrentUser([userdata])
                props.setShow(true)
                // go to diff page
            } else {
               setErr('Wrong password')
            }
        }
    }

    return (
        <div > 
            <div className="ui middle aligned center aligned grid" style={{paddingTop: "50%"}}>
                <img className="ui center aligned small image" src={Logo} alt="logo"/>
                <form className="ui large form">
                    <div className="column">
                        <div className="ui form">
                            <div className="ui stacked segment">
                                <div className="field">
                                     <label>Username</label>
                                    <div className="ui left icon input">
                                         <input onChange={e=>setUserNameInput(e.target.value)} type="text" placeholder="UserName" ></input>
                                        <i className="user icon"></i>
                                    </div>
                                </div>
                                <div className="field">
                                    <label>Password</label>
                                    <div className="ui left icon input">
                                        <input  onChange={e=>setPasswordInput(e.target.value)} type="password" placeholder="Password"></input>
                                        <i className="lock icon"></i>
                                    </div>
                                </div>
                                <div>
                                    <Link to={`${dashboard}`}><button className="ui fluid large orange submit button" onClick={()=>login()}>Login</button></Link>
                                </div>
                                <div className="ui horizontal divider">Or</div>
                                <div className="field">
                                    <Link to='/signup'><button className="ui fluid large button">Sign-up</button ></Link>
                                </div>
                                {err && <h5 style={{color: 'red'}}>{err}</h5>}
                            </div>
                        </div>
                    </div>
                </form>
            </div>    
        </div>
    );
}

export default App;