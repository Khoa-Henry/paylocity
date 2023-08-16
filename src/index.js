import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
// import * as serviceWorker from './serviceWorker';
// import Clocking from './Components/PunchTime/Clocking'
// import Loading from './Loading'
// import Dashboard from './Components/Dashboardpage/DashBoard';
// import ToDo from './Components/Todopage/Todo'
// import Signup from './Signup'
// import Community from './Components/Communitypage/Community'
import Nav from './Nav';
import 'bootstrap/dist/css/bootstrap.min.css';


ReactDOM.render(
  <React.StrictMode>
    <Nav/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
