// Display the details of the selected cycle

import React, { Component } from 'react';
import { connect } from 'react-redux';

class CycleStats extends Component {
    render() {
        return (
            <div>
                <h6>Sleep Cycle Stats</h6>
                <div className="divider"></div>
                <p>{ 'Sleep for: ' + this.props.selectedCycle.duration + 'minutes' }</p>
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