import React from 'react';


class Time extends React.Component {
    constructor() {
        super()
        this.state={time: new Date()}
    }

    currentTime() {
        this.setState({
            time: new Date()
        })
    }

    componentWillMount() {
        setInterval(()=>this.currentTime(),1000)
    }

    render() {
        return (
            <div className="ui middle aligned center aligned grid">
                <form className="ui large form" >
                    <div className="column">
                        <div className="ui form">
                            <div className="ui stacked segment">
                                <div className="ui horizontal label">
                                    <h2>Time:</h2>
                                    <h2>{this.state.time.toLocaleTimeString()}</h2>
                                </div>
                                    <h4>Date: {this.state.time.toLocaleDateString()}</h4>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}







export default Time;