import React, { useEffect } from 'react';
// import Profile from './Profile';
import AppComponent from './AppComponent';
import './style.css';
// import Girlpic from '../Communitypage/Images/girlpic.jpg'
import { Button } from '@material-ui/core';
import {Link} from 'react-router-dom';
import Person from '../Dashboardpage/person.jpg';
import {Modal, Container, Row, Col } from 'react-bootstrap';

function DashBoard (props) {

    const handleClose = () => props.setShow(false);

        
    // useEffect(()=>{
    // use api to record the the emotions to users
    // })


    const logout = ()=>{
        props.setCurrentUser([])
    }

    return (

        <div> 
            <Modal 
            show={props.show}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
            aria-labelledby="contained-modal-title-vcenter"
            centered>
                <Modal.Header closeButton>
                    <Modal.Title>How are you feeling today?</Modal.Title>
                </Modal.Header>
                <Modal.Body className="show-grid">
                    <Container>
                        <Row>
                            <Col style={{color:'red'}}>
                                Worst
                            </Col>
                            <Col style={{color:'orange'}}>
                                Not Good
                            </Col >
                            <Col style={{color:'grey'}}>
                                Ok
                            </Col>
                            <Col style={{color:'green'}}>
                                Good
                            </Col>
                            <Col style={{color:'lime'}}>
                                Best
                            </Col>
                        </Row>
                    </Container>
                </Modal.Body>   
            </Modal>
            <div>
                <div>
                    {props.currentUser.map(item=>
                        <h1 className="ui header" style={{paddingLeft:'10%', paddingTop:'5%'}}>
                            <img src={Person} className="ui circular image"/>
                            <div className="content">
                                {item.firstName} {item.lastName}
                                <div className="sub header">{item.position}</div>
                            </div>
                        </h1>)}
                    {/* <div>
                        <i className="fab fa-facebook"></i>
                        <i className="fab fa-youtube"></i>
                        <i className="fab fa-instagram"></i>
                        <i className="fab fa-twitter"></i>  
                    </div> */}
                </div>
            </div>
            <div className="ui divider" ></div>
            <AppComponent/>
            
            <div style={{position:'fixed', bottom:'30px', left:'37%'}}>
                <Link to='/login'><Button onClick={()=>logout()} className="ui fluid large button">Logout</Button></Link>
            </div>
        </div>
    );
};



export default DashBoard;