import React, { Component } from 'react';
import { connect } from 'react-redux';

import CycleCard from './cyclecard';
import '../styles/css/app.css';

class CycleList extends Component {
    render() {
        return (
            <div className="overflow-container">
                <div className="row flex expand" id="cycleContainer">
                    {
                        this.props.cycleTimes.map((cycle, index) => {
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
        cycleTimes: state.cycleTimes
    }
}

export default connect(mapStateToProps, null)(CycleList);