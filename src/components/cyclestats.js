// Display the details of the selected cycle

import React, { Component } from 'react';
import { connect } from 'react-redux';

class CycleStats extends Component {
    render() {
        
        console.log(this.props.selectedCycle);
        return (
            <div>
                <h6>Sleep Cycle Stats</h6>
                <div className="divider"></div>

                <table className="table">
                    <thead>
                        <tr>
                            <th><abbr title="Title1">Info</abbr></th>
                            <th><abbr title="Title2">Stats</abbr></th>
                        </tr>
                    </thead>

                    <tr><th>Start</th><td>{ this.props.selectedCycle.length === 0 ? 'N/A' : this.props.selectedCycle.cycleStart.format('hh:mm a') }</td></tr>
                    <tr><th>End</th><td>{ this.props.selectedCycle.length === 0 ? 'N/A' : this.props.selectedCycle.cycleEnd.format('hh:mm a') }</td></tr>
                    <tr><th>Duration</th><td>{ this.props.selectedCycle.length === 0 ? 'N/A' : this.props.selectedCycle.duration + ' minutes' }</td></tr>
                    <tr><th>Total Cycles</th><td>{ this.props.selectedCycle.length === 0 ? 'N/A' : this.props.selectedCycle.cycleCount }</td></tr>
                </table>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        selectedCycle: state.selectedCycle
    }
}

export default connect(mapStateToProps, null)(CycleStats);