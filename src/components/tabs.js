import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import { getWakeUpTimes, clearSelectedCycle } from '../actions/index';

import TimeForm from './timeform';
import CycleList from './cyclelist';
import CycleStats from './cyclestats';
import WakeUpList from './wakeuplist';


class Tabs extends Component {
    constructor() {
        super();
        
    }

    render() {
        return (
            <div id='tabs'>
                <div className='tab-container tabs-center'>
                    <ul>
                        <li className='tab-item selected' onClick={this.props.clearSelectedCycle}>
                            <a className='uppercase'>Sleep</a>
                        </li>
                        <li id='queueTab' className='tab-item' onClick={this.updateWakeUpTimeTab.bind(this)}>
                            <a className='uppercase'>Wake Up</a>
                        </li>
                    </ul>
                </div>
                <space className='large'></space>
                <div className='tabpage shown'>
                    <div className='content text-center'>
                        <h6>I want to wake up at...</h6>
                        <TimeForm />
                    </div>
                    <CycleList />
                    <div className="content">
                        <CycleStats />
                    </div>
                </div>
    
                <div className='tabpage'>
                    <div className='content text-center'>
                        <h6>If you sleep now, wake up at...</h6>
                    </div>
                    <WakeUpList />
                    <div className="content">
                        <CycleStats />
                    </div>
                </div>
            </div>
        );
    }

    updateWakeUpTimeTab() {
        this.props.getWakeUpTimes({
            time: moment(),
            sleepCycleLength: 90
        }); // Pass in the current time as the parameter
    }
}

export default connect(null, { getWakeUpTimes, clearSelectedCycle })(Tabs);