import { combineReducers } from 'redux'; // Combine into one root reducer
import { UPDATE_SLEEP_CYCLES } from '../actions/index'; // Import the action creator

// Reducer that stores the times
function cycleTimes(state = [], action) {
    switch (action.type) {
        case UPDATE_SLEEP_CYCLES:
            return action.cycles; // Update state with new cycles
        default:
            return state;
    }
}

const rootReducer = combineReducers({ cycleTimes });

export default rootReducer;