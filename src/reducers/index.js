import { combineReducers } from 'redux'; // Combine into one root reducer
import { UPDATE_SLEEP_CYCLES, UPDATE_SELECTED_CYCLE, CLEAR_SELECTED_CYCLE, UPDATE_WAKEUP_TIMES } from '../actions/index'; // Import the action creator

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
            return action.cycle;
        case CLEAR_SELECTED_CYCLE:
            return [];
        default: 
            return state;
    }
}

// Used to store the times the person would wake up if they went to sleep now
function wakeUpTimes(state = [], action) {
    switch (action.type) {
        case UPDATE_WAKEUP_TIMES:
            return action.wakeUpTimes; // Update with new payload
        default:
            return state;
    }
}

const rootReducer = combineReducers({ cycleTimes, selectedCycle, wakeUpTimes });

export default rootReducer;