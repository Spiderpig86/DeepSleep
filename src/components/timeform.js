import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import { getCycles } from '../actions/index';

class TimeForm extends Component {
    constructor() {
        super();

        // Set the default time
        let defTime = moment().add(1, 'days');

        this.state = {
            cycleTime: defTime,
            ampm: 'AM',
            sleepCycleLength: 90,
            fallAsleepTime: 14
        };
    }

    // TODO: Add 12-hour and 24-hour formats
    render() {
        return (
            <div>
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
                <div className="center content">
                    <button
                        id="btnMore"
                        onClick={() => this.toggleOptions() }
                    >More Options</button>
                </div>
                <div id="optionsContainer">
                    <div className="content">
                        <h6>More Options</h6>
                        <div className="form-group">
                            <label className="form-group-label">Time to fall asleep</label>
                            <input
                                className="form-group-input"
                                type="number"
                                min="0"
                                defaultValue="14"
                                onChange={(e) => this.setState({ fallAsleepTime: e.target.value })}
                            />
                        </div>
                        <span className="info text-center">Average time to fall asleep is 14 minutes.</span>
                        <div className="form-group">
                            <label className="form-group-label">Average Sleep Cycle</label>
                            <select
                                className="select form-group-input"
                                defaultValue="90"
                                onChange={(e) => this.setState({ sleepCycleLength: e.target.value })}
                            >
                                <option>81</option>
                                <option>84</option>
                                <option>87</option>
                                <option>90</option>
                                <option>93</option>
                                <option>96</option>
                                <option>99</option>
                                <option>102</option>
                            </select>
                        </div>
                        <span className="info text-center">Average sleep cycle is 90 minutes.</span>
                    </div>
                </div>
            </div>
        );
    }

    setHours(hour, ampm = this.state.ampm) {
        if (this.isFieldsValid())
            return;
            
        let curTime = this.state.cycleTime; // The time the user wants to wake up

        // Add extra 12 hours if PM
        if (ampm === 'PM' && hour < 12)
            hour = +hour + 12; // Prepend with plus to make hour numerical
        else if (ampm === 'AM' && hour === '12') // Special case if user inputs 12 AM
            hour = 0;

        console.log(hour);
        
        curTime.hours(hour);

        this.setState({ cycleTime: curTime });
        console.log('setState', this.state.cycleTime);

        this.updateCycles(curTime);
    }

    setMinutes(minutes) {
        if (this.isFieldsValid())
            return;

        let curTime = this.state.cycleTime; // The time the user wants to wake up
        curTime.minutes(minutes);
        this.setState({ cycleTime: curTime });
        this.updateCycles(curTime);
    }

    setAMPM(ampm) {
        if (this.isFieldsValid())
            return;
        if (ampm === 'AM')
            this.setState({ ampm: 'AM' });
        else
            this.setState({ ampm: 'PM' });  

        // Also update hours
        if (!isNaN(document.querySelector('#hour').value)) // Only update if the hour field is numerical
            this.setHours(document.querySelector('#hour').value, ampm); // Update time when am/pm changes
    }

    updateCycles(time) {
        this.props.getCycles({
            time: time,
            sleepCycleLength: this.state.sleepCycleLength,
            fallAsleepTime: this.state.fallAsleepTime
        });
    }

    isFieldsValid() {
        return (isNaN(document.querySelector('#hour').value) || isNaN(document.querySelector('#minute').value)); // Return true only if the time inputs are all numerical
    }

    toggleOptions() {
        document.querySelector('#optionsContainer').classList.toggle('active');
    }
}

export default connect(null, { getCycles })(TimeForm);