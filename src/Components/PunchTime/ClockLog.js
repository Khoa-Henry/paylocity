import React from 'react';
import ClockingLogItems from './ClockingLogItems';

const ClockingLog = (props)=> {
   
        return(
            <div className="ui divided grid">
                    <div className="column">
                        <div className="ui form">
                            <div className="ui stacked segment">
                                <h3>Time Log</h3>
                                <div style={{width:"auto", height:"450px", overflow:"auto"}}>  
                                    {props.logTimes.map(item=>
                                        <ClockingLogItems clockin={item.clockin} date={item.date} time={item.time}/>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
        )
    
};


export default ClockingLog;