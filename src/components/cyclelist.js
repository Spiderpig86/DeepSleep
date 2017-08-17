import React, { Component } from 'react';
import { connect } from 'react-redux';

import CycleCard from './cyclecard';
import '../styles/css/app.css';

class CycleList extends Component {
    render() {
        return (
            <div className="overflow-container text-center">
                { this.props.cycleTimes.length === 0 ? 
                        <div className="placeholder">
                            <div className="placeholder-icon">
                                <span className="icon">
                                    <i className="fa fa-people"></i>
                                </span>
                            </div>
                            <h5 className="title">No cycles to show.</h5>
                            <p className="subtitle">Select a time to get started.</p>
                        </div>
                        :
                        <div className="row flex expand" id="cycleContainer">
                            {
                                this.props.cycleTimes.map((cycle, index) => {
                                    return (
                                        <CycleCard 
                                            key={index}
                                            cycle={cycle}
                                            isWake={false}
                                        />
                                    )
                                })
                            }
                        </div>
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