import React, { useState } from 'react';
import Dashboard from './Components/Dashboardpage/DashBoard';
import Signup from './Signup';
import App from './App';
import ToDo from './Components/Todopage/Todo';
import Clocking from './Components/PunchTime/Clocking';
import Community from './Components/Communitypage/Community';
import Loading from './Loading';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';


export default function Nav(){
    const [userInput,setUserInput] = React.useState('');
    const [items, setItems] = React.useState([]);
    const [showList, setShowList] = React.useState('all');
    const [userData, setUserData] = React.useState([]);
    const [currentUser, setCurrentUser] = React.useState([]);
    const [show, setShow] = React.useState(false);
    const [post, setPost] = React.useState([])

    return(
        <Router>
            <Switch>
                    <Route exact path='/'><Loading/></Route>
                    <Route path='/dashboard'>
                        <Dashboard
                            userData={userData}
                            setUserData={setUserData}
                            currentUser={currentUser}
                            setCurrentUser={setCurrentUser}
                            show={show}
                            setShow={setShow}
                        />
                    </Route>
                    <Route path='/signup'>
                        <Signup
                            userData={userData}
                            setUserData={setUserData}
                            currentUser={currentUser}
                            setCurrentUser={setCurrentUser}
                        />
                    </Route>
                    <Route path='/login'>
                        <App
                            userData={userData}
                            setUserData={setUserData}
                            currentUser={currentUser}
                            setCurrentUser={setCurrentUser}
                            show={show}
                            setShow={setShow}
                        />
                    </Route>
                    <Route path='/paylocityboard'>
                        <ToDo
                            userInput={userInput}
                            items={items}
                            showList={showList}
                            setUserInput={setUserInput}
                            setItems={setItems}
                            setShowList={setShowList}
                        />
                    </Route>
                    <Route path='/punchtime'><Clocking/></Route>
                    <Route path='/community'>
                        <Community
                            userData={userData}
                            setUserData={setUserData}
                            currentUser={currentUser}
                            setCurrentUser={setCurrentUser}
                            post={post}
                            setPost={setPost}
                        />
                    </Route>
            </Switch>
        </Router>
    )
}