import React, { Component } from 'react';
import TimeForm from './timeform';
import CycleList from './cyclelist';
import '../styles/css/cirrus.min.css'; // Need to import to use stylesheet

class App extends Component {
    
    render() {
        return (
            <div className="hero fullscreen">
                <div className="hero-body">
                    <div className="content text-center">
                        <h3>DeepSleep</h3>
                        <h6>When do you want to wake up?</h6>
                        <TimeForm />
                        <CycleList />
                    </div>
                </div>
            </div>
        );
    }
}

export default App;