import React, { Component } from 'react';

import moment from 'moment';

class TimeForm extends Component {
    constructor() {
        super();

        // Set the default time
        let defTime = moment(new Date()).add(1, 'days');

        this.state = {
            cycleTime: defTime,
            ampm: 'AM'
        };
    }

    // TODO: Add 12-hour and 24-hour formats
    render() {
        return (
            <div className="row level fluid-container">
                <div className="col-fluid input-control">
                    <select
                        id='hour'
                        onChange={ (e) => this.setHours(e.target.value) }
                    >
                        <option>(hours)</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        <option>6</option>
                        <option>7</option>
                        <option>8</option>
                        <option>9</option>
                        <option>10</option>
                        <option>11</option>
                        <option>12</option>
                    </select>
                </div>
                <div className="col-fluid input-control">
                    <select
                        id='minute'
                        onChange={ (e) => this.setMinutes(e.target.value) }
                    >
                        <option>(minutes)</option>
                        <option>00</option>
                        <option>05</option>
                        <option>10</option>
                        <option>15</option>
                        <option>20</option>
                        <option>25</option>
                        <option>30</option>
                        <option>35</option>
                        <option>40</option>
                        <option>45</option>
                        <option>50</option>
                        <option>55</option>
                    </select>
                </div>
                <div className="col-fluid input-control">
                    <select
                        id='ampm'
                        onChange={ (e) => this.setAMPM(e.target.value) }
                    >
                        <option>AM</option>
                        <option>PM</option>
                    </select>
                </div>
            </div>
        );
    }

    setHours(hour, ampm = this.state.ampm) {
        let cycleTime = this.state.cycleTime; // The time the user wants to wake up

        // Add extra 12 hours if PM
        if (ampm === 'PM' && hour < 12)
            hour = +hour + 12; // Prepend with plus to make hour numerical
        else if (ampm === 'AM' && hour === '12') // Special case if user inputs 12 AM
            hour = 0;
        
        cycleTime.hours(hour);

        this.setState({ cycleTime: cycleTime });
    }

    setMinutes(minutes) {
        let curTime = this.state.cycleTime; // The time the user wants to wake up
        curTime.minutes(minutes);
        this.setState({ cycleTime: curTime });
    }

    setAMPM(ampm) {
        console.log(ampm);
        if (ampm === 'AM')
            this.setState({ ampm: 'AM' });
        else
            this.setState({ ampm: 'PM' });

        // Also update hours
        this.setHours(this.state.cycleTime._d.getHours(), ampm); // Update time when am/pm changes
    }
}

export default TimeForm;