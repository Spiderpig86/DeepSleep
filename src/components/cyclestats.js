// Display the details of the selected cycle

import React, { Component } from 'react';
import { connect } from 'react-redux';

class CycleStats extends Component {
    render() {
        return (
            <div id="cycleStats">
                <h6>Sleep Cycle Stats</h6>
                <div className="divider"></div>

                <table className="table striped">
                    <thead>
                        <tr>
                            <th><abbr title="Various categories">Info</abbr></th>
                            <th><abbr title="Associated statistics">Stats</abbr></th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr><th>Bedtime</th><td>{ this.props.selectedCycle.length === 0 || this.props.selectedCycle.bedTimeStart === null ? 'N/A' : this.props.selectedCycle.bedTimeStart.format('hh:mm a') }</td></tr>
                        <tr><th>Start</th><td>{ this.props.selectedCycle.length === 0 || this.props.selectedCycle.cycleStart === null ? 'N/A' : this.props.selectedCycle.cycleStart.format('hh:mm a') }</td></tr>
                        <tr><th>End</th><td>{ this.props.selectedCycle.length === 0 || this.props.selectedCycle.cycleEnd === null ? 'N/A' : this.props.selectedCycle.cycleEnd.format('hh:mm a') }</td></tr>
                        <tr><th>Duration</th><td>{ this.props.selectedCycle.length === 0 || this.props.selectedCycle.duration === null ? 'N/A' : this.props.selectedCycle.duration + ' minutes' }</td></tr>
                        <tr><th>Total Cycles</th><td>{ this.props.selectedCycle.length === 0 || this.props.selectedCycle.cycleCount === null ? 'N/A' : this.props.selectedCycle.cycleCount }</td></tr>
                    </tbody>
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