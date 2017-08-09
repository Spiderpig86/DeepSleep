import { combineReducers } from 'redux'; // Combine into one root reducer
import { UPDATE_SLEEP_CYCLES, UPDATE_SELECTED_CYCLE } from '../actions/index'; // Import the action creator

// Reducer that stores the times
function cycleTimes(state = [], action) {
    switch (action.type) {
        case UPDATE_SLEEP_CYCLES:
            return action.cycles; // Update state with new cycles
        default:
            return state;
    }
}

// Used to hold what current sleep cycle is selected
function selectedCycle(state = [], action) {
    switch (action.type) {
        case UPDATE_SELECTED_CYCLE:
            console.log(action.cycle);
            return action.cycle;
        default: 
            return state;
    }
}

const rootReducer = combineReducers({ cycleTimes, selectedCycle });

export default rootReducer;