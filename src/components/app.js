import React, { Component } from 'react';
import { Tabs } from './tabs';
import '../styles/css/cirrus.min.css'; // Need to import to use stylesheet

class App extends Component {
    
    render() {
        return (
            <div className="hero fullscreen">
                <div className="hero-body">
                    <h3>DeepSleep</h3>
                    <Tabs />
                </div>
            </div>
        );
    }
}

export default App;