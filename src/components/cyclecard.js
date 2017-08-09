import React, { Component } from 'react';

class CycleCard extends Component {
    render() {
        return (
            <div className="frame col-3 cycle-item">
                <div className="frame-head">
                    <h4>{ this.props.cycle.cycleCount }</h4>
                    <p className="no-margin info text-center">cycles</p>
                </div>
                <div className="frame-body">
                    <div className="content">
                        <p className="no-margin">{ this.props.cycle.cycleStart.calendar() }</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default CycleCard;