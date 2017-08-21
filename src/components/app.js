import React, { Component } from 'react';
import Tabs from './tabs';
import '../styles/css/cirrus.min.css'; // Need to import to use stylesheet
import './tabcontrol.js'; // Import the tabs library
import { setUpTabs } from '../tabloader.js'; // Import the JS to bind the tabs

class App extends Component {
    // Bind the tab event handler after the component renders
    componentDidMount() {
        setUpTabs();
    }
    
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