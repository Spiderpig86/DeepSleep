import React, { Component } from 'react';
import { connect } from 'react-redux';

import CycleCard from './cyclecard';

class CycleList extends Component {
    render() {
        return (
            <div>
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
        );
    }
}

function mapStateToProps(state) {
    return {
        cycleTimes: state.cycleTimes
    }
}

export default connect(mapStateToProps, null)(CycleList);