import Axios from 'axios';
import React, { useEffect } from 'react';
import Logo from './paylocitylogo.png';
import {Link} from 'react-router-dom';
import { propTypes } from 'react-bootstrap/esm/Image';

export default function Signup (props){
    const [userName, setUserName] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [firstName, setFirstName] = React.useState('')
    const [lastName, setLastName] = React.useState('')
    const [userData, setUserData] = React.useState([])
    const [position, setPosition] = React.useState('')
    const [dashboard, setDashboard] = React.useState('/signup')
    const [err,setErr] = React.useState('')

    useEffect(()=>{
        Axios({
            method:'get',
            url:'https://5f821b3106957200164331eb.mockapi.io/users',
        }).then(res=>setUserData(res.data))
    })

    const storeData = ()=> {
        
        if(userName !== '' && password !== '' && firstName !== '' && lastName !== ''){
            if(userData.find(i=>i.userName === userName)){
                setErr('User already exist')
            }
            else{
                let newObject = {
                    userName: userName,
                    password: password,
                    firstName: firstName,
                    lastName: lastName,
                    position: position,
                }
                setDashboard('/dashboard')
                setUserName('')
                setPassword('')
                setFirstName('')
                setLastName('')
                setPosition('')
                props.setCurrentUser([newObject])
                Axios({
                    method: 'post',
                    url: 'https://5f821b3106957200164331eb.mockapi.io/users',
                    data: newObject,
                })
            }
        }
    }

    return(
        <div className="ui middle aligned center aligned grid" style={{paddingTop: "30%"}}>
            <img className="ui center aligned small image" src={Logo} alt="logo"/>
            <div className="ui stacked segment">
                <form onSubmit={e=>e.preventDefault()} className="ui large form">
                    <div className="field">
                        <label>Username:</label>
                        <input value={userName} onChange={(e)=>setUserName(e.target.value)}/>
                    </div>
                    <div className="field">
                        <label>Password:</label>
                        <input value={password} onChange={(e)=>setPassword(e.target.value)} type="password" />
                    </div>
                    <div className="field">
                        <label>First Name:</label>
                        <input value={firstName} onChange={(e)=>setFirstName(e.target.value)} type="text"/>
                    </div>
                    <div className="field">
                        <label>Last Name:</label>
                        <input value={lastName} type="text" onChange={(e)=>setLastName(e.target.value)}/>
                    </div>
                    <div className="field">
                        <label>Position:</label>
                        <input value={position} type="text" onChange={(e)=>setPosition(e.target.value)}/>
                    </div>
                    <div className="field">
                        <div className="ui checkbox">
                        <input type="checkbox" />
                        <label>I agree to the Terms and Conditions</label>
                        </div>
                    </div>
                    {err && <h5 style={{color: 'red'}}>{err}</h5>}
                    <Link to={`${dashboard}`}><button className="ui fluid large orange submit button" onClick={()=>storeData()}>Sign-up</button></Link>
                    <Link to='/login'><a>Back</a></Link>
                </form>
            </div>
        </div>
    )
}
