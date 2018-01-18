import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateSelectedCycle } from '../actions/index';

class CycleCard extends Component {

    render() {
        return (
            <a
                href="#cyclestats"
                className="frame col-3 cycle-item smoothScroll"
                onClick={() => this.updateCycleStatsContainer(this.props.cycle)}
                style={{background: this.setBgColor()}}
            >
                <div className="frame-head">
                    <h4>{ this.props.cycle.cycleCount }</h4>
                    <p className="no-margin info text-center">cycles</p>
                </div>
                <div className="frame-body">
                    <div className="content">
                        <p className="no-margin">{ this.props.isWake ? this.props.cycle.cycleEnd.calendar() : this.props.cycle.cycleStart.calendar() }</p>
                        <p className="no-margin">{ this.capitalizeFromCaps(this.props.cycle.type) + ' for ' + this.minutesToHoursString(this.props.cycle.duration) }</p>
                    </div>
                </div>
            </a>
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

    setBgColor() {
        // Update color based on cycle
        switch (this.props.cycle.cycleCount) {
            case 7:
                return '#524364';
            case 6:
                return '#5a5386';
            case 5:
                return '#4873a6';
            case 4:
                return '#4c9ed0';
            case 3:
                return '#40c8c4';
            case 2:
                return '#25cc9e';
            case 1:
                return '#14d060';
            default:
                return '#212e53';
        }
    }
}

export default connect(null, { updateSelectedCycle })(CycleCard); // Remember to connect the action creator