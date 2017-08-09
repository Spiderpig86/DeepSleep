import React, { Component } from 'react';

class CycleCard extends Component {
    render() {
        return (
            <div className="card">
                <p>{this.props.cycle.cycleCount}</p>
                <p>{this.props.cycle.cycleStart.calendar()}</p>
            </div>
        );
    }
}

export default CycleCard;