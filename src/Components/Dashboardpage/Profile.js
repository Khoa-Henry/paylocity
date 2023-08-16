import React from 'react';
// import profilepic from './person.jpg';
import './style.css';
import Girlpic from '../Communitypage/Images/girlpic.jpg'


class Profile extends React.Component {
    render(){
        return(
            <div className="stackable grid container">
               
                <div className="container">
                <div className="cover-photo">
                    <img src={Girlpic} className="profile" alt="profilepic"/>    
                </div>
                <div className="profile-name">Maria Paul</div>
                <p className="about">Project Manager (Google)<br/>Five Year Experience</p>  

                {/* <div>
                    <i className="fab fa-facebook"></i>
                    <i className="fab fa-youtube"></i>
                    <i className="fab fa-instagram"></i>
                    <i className="fab fa-twitter"></i>  
                </div> */}
                </div>
            </div>
        )
    };
};

export default Profile;
