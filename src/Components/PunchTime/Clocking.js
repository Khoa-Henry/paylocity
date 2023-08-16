import React from 'react';
import Clock from '../PunchTime/clock';
import ClockLog from '../PunchTime/ClockLog';
import ClockHeader from '../PunchTime/ClockHeader';
import moment from 'moment';

class Clocking extends React.Component {
    constructor(){
        super();
        this.state={
            logTimes:[],
            whatis: ''
    };
    }

    

    render() {
        return (
            <div>
                <ClockHeader/>
                <div>
                    <Clock />
                </div>
                <div >
                    <div className="ui center aligned grid">
                        <div className="column">
                            <div className="ui form">
                                <button disabled={this.state.whatis === 'clockout'} onClick={()=>
                                    {
                                        let today = new Date();
                                        let dayInString =moment(today).format('MM/DD/YYYY');
                                        let timeIn = moment(today).format('hh:mm A');
                                        let newObj=
                                        {
                                            clockin: 'out',
                                            date: dayInString,
                                            time: timeIn,
                                        };
                                        let newArray = this.state.logTimes.slice();
                                        newArray.push(newObj);
                                        this.setState({logTimes: newArray, whatis: 'clockout'});
                                    }} className="ui large secoundary button">Clock Out
                                </button>
                                <button disabled={this.state.whatis === 'clockin'} onClick={()=>
                                    {
                                        let today = new Date();
                                        let dayInString =moment(today).format('MM/DD/YYYY');
                                        let timeIn = moment(today).format('hh:mm A');
                                        let newObj=
                                        {
                                            clockin: 'in',
                                            date: dayInString,
                                            time: timeIn,
                                        }
                                        let newArray = this.state.logTimes.slice();
                                        newArray.push(newObj);
                                        this.setState({logTimes: newArray,whatis: 'clockin'});
                                    }} className="ui large orange button">Clock In
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="ui center aligned">
                    <ClockLog logTimes={this.state.logTimes}/>
                </div>
            </div>
    
        );
    }
};



export default Clocking;