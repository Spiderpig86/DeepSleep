import React, { Component } from 'react';

class TimeForm extends Component {

    // TODO: Add 12-hour and 24-hour formats
    render() {
        return (
            <div className="row level fluid-container">
                <div className="col-fluid input-control">
                    <select id='hour'>
                        <option>(hours)</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        <option>6</option>
                        <option>7</option>
                        <option>8</option>
                        <option>9</option>
                        <option>10</option>
                        <option>11</option>
                        <option>12</option>
                    </select>
                </div>
                <div className="col-fluid input-control">
                    <select id='minute'>
                        <option>(minutes)</option>
                        <option>00</option>
                        <option>05</option>
                        <option>10</option>
                        <option>15</option>
                        <option>20</option>
                        <option>25</option>
                        <option>30</option>
                        <option>35</option>
                        <option>40</option>
                        <option>45</option>
                        <option>50</option>
                        <option>55</option>
                    </select>
                </div>
                <div className="col-fluid input-control">
                    <select id='ampm'>
                        <option>AM</option>
                        <option>PM</option>
                    </select>
                </div>
            </div>
        );
    }
}

export default TimeForm;