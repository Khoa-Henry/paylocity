import React from 'react';
import { Link } from 'react-router-dom';
import Benfits from './benfits.png';
import CalendarIcon from './calendar.png';
import CommunityIcon from './community.jpg';
import Learning from './learning.png';
import PunchIcon from './punch.png';
import Setting from './setting.png';
import TodoIcon from './todo.png';
import {Modal} from 'react-bootstrap';

function AppComponent (){

    const [show,setShow] = React.useState(false)

    const handleClose=()=>{setShow(false)}
    const handleOpen=()=>{setShow(true)}

        return(
            <div>
                <Modal 
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
                aria-labelledby="contained-modal-title-vcenter"
                centered>
                <Modal.Header closeButton>
                    <Modal.Title >Under Construction</Modal.Title>
                </Modal.Header>
                </Modal>
            <div style={{paddingTop:"5%",paddingLeft:"3%", paddingRight:"3%"}}>
                <div className="ui three column center aligned grid">
                        <div className="column">
                            <Link to='/punchtime'>
                                <a>
                                <img style={{height:'90px', width:'120px', overflow:'hidden'}} className="ui image" src={PunchIcon} alt="Punch"/>
                                Punch time
                                </a>
                            </Link>
                        </div>
                        <div className="column">
                            <Link to='/community'><a>
                                <img style={{height:'90px', width:'120px', overflow:'hidden'}} className="ui image" src={CommunityIcon} alt="Community"/>
                                Community
                            </a></Link>
                        </div>
                        <div className="column">
                            <Link to='/paylocityboard'><a>
                                <img style={{height:'90px', width:'120px', overflow:'hidden'}} className="ui image" src={TodoIcon} alt="PaylocityBoard"/>
                                Paylocity Board
                            </a></Link>
                        </div>
                        <div className="column">
                            <a onClick={()=>handleOpen()}>
                                <img style={{height:'90px', width:'120px', overflow:'hidden'}} className="ui image" src={CalendarIcon} alt="Calender"/>
                                Calendar
                            </a>
                        </div>
                        <div className="column">
                            <a onClick={()=>handleOpen()}>
                                <img style={{height:'90px', width:'120px', overflow:'hidden'}} className="ui image" src={Benfits} alt="Benfits"/>
                                Benefits
                            </a>
                        </div>
                        <div className="column">
                            <a onClick={()=>handleOpen()}>
                                <img style={{height:'90px', width:'120px', overflow:'hidden'}} className="ui image" src={Learning} alt="Learning"/>
                                Learning
                            </a>
                        </div>
                        <div className="column">
                            <a onClick={()=>handleOpen()}>
                                <img style={{height:'90px', width:'120px', overflow:'hidden'}} className="ui image" src={Setting} alt="Setting"/>
                                Settings
                            </a>
                        </div>
                </div>
            </div>
            </div>
        )
};

export default AppComponent;