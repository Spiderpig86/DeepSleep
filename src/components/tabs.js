import React from 'react';
import TimeForm from './timeform';
import CycleList from './cyclelist';
import CycleStats from './cyclestats';
import WakeUpList from './wakeuplist';

export const Tabs = (props) => {
    return (
        <div id='tabs'>
            <div className='tab-container tabs-center'>
                <ul>
                    <li className='tab-item selected'>
                        <a className='uppercase'>Sleep</a>
                    </li>
                    <li id='queueTab' className='tab-item'>
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

            </div>
        </div>
    );
}