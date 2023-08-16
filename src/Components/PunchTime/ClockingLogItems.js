import React from 'react';

const ClockingLogItems = (props)=>{
    
        return(
            <div>
                <div className="ui divided selection list">
                    <p className="item">
                        <div className={`ui ${props.clockin === 'in'? 'orange':'green'} horizontal label`}>Clock {props.clockin}</div>
                        Date: {props.date}
                        Time: {props.time}
                    </p>
                </div>
            </div>
        )
            
}

export default ClockingLogItems;