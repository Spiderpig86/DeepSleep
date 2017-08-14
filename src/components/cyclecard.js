import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateSelectedCycle } from '../actions/index';

class CycleCard extends Component {

    render() {
        return (
            <div
                className="frame col-3 cycle-item"
                onClick={() => this.updateCycleStatsContainer(this.props.cycle) }    
            >
                <div className="frame-head">
                    <h4>{ this.props.cycle.cycleCount }</h4>
                    <p className="no-margin info text-center">cycles</p>
                </div>
                <div className="frame-body">
                    <div className="content">
                        <p className="no-margin">{ this.props.cycle.cycleStart.calendar() }</p>
                        <p className="no-margin">{ this.capitalizeFromCaps(this.props.cycle.type) + ' for ' + this.minutesToHoursString(this.props.cycle.duration) }</p>
                    </div>
                </div>
            </div>
        );
    }

    // Helper function to capitlize word from caps
    capitalizeFromCaps(s) {
        return s[0] + s.slice(1).toLowerCase(); // Slice to get the letters after the first one
    }

    minutesToHoursString(minutes) {
        let h = Math.floor(minutes / 60);
        let m = minutes % 60;

        return `${h} hr ${m} min`;
    }

    updateCycleStatsContainer(payload) {
        this.props.updateSelectedCycle(payload); // Pass in the current cycle object and always use the method from props
    }
}

export default connect(null, { updateSelectedCycle })(CycleCard); // Remember to connect the action creator