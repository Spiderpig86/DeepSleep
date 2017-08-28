import React, { Component } from 'react';
import Tabs from './tabs';
import './tabcontrol.js'; // Import the tabs library
import { setUpTabs } from '../tabloader.js'; // Import the JS to bind the tabs
import {Background} from '../components/background';

import '../styles/dist/cirrus.min.css'; // Need to import to use stylesheet
import '../styles/dist/app.min.css';
import '../styles/dist/scroll.min.css';

class App extends Component {
    // Bind the tab event handler after the component renders
    componentDidMount() {
        setUpTabs();
    }
    
    render() {
        return (
            <div className="hero fullscreen">
                <div className="hero-body">
                    <Background />
                    <h3>DeepSleep</h3>
                    <Tabs />
                </div>
            </div>
        );
    }
}

export default App;