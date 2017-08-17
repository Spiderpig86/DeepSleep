// Component that will display when to wake up if you fall asleep now
import React, { Component } from 'react';
import  { connect } from 'react-redux';

import CycleCard from './cyclecard';
import '../styles/css/app.css';

class WakeUpList extends Component {
    render() {
        return (
            <div className="overflow-container text-center">
                <div className="row flex expand" id="cycleContainer">
                    {
                        this.props.wakeUpTimes.map((cycle, index) => {
                            return (
                                <CycleCard 
                                    key={index}
                                    cycle={cycle}
                                />
                            )
                        })
                    }
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        wakeUpTimes: this.state.wakeUpTimes
    }
}

export default connect(mapStateToProps, null)(WakeUpList);