import moment from 'moment';

// Declare action consts
export const UPDATE_SLEEP_CYCLES = 'UPDATE_SLEEP_CYCLES'; // Const for updating times to fall asleep
export const UPDATE_SELECTED_CYCLE = 'UPDATE_SELECTED_CYCLE'; // Const for updating the sleep stats component
export const CLEAR_SELECTED_CYCLE = 'CLEAR_SELECTED_CYCLE'; // For when we want to clear the selected cycle

// Export types of sleep
export const TYPE_NAP = 'NAP';
export const TYPE_SLEEP = 'SLEEP';

function updateSleepCycles(cycles) {
    return {
        type: UPDATE_SLEEP_CYCLES,
        cycles // Contains 6 different times
    }
}

export function getCycles(timeObj) {
    // Time is a moment object with hours, minutes, and seconds already set
    return (dispatch) => { // Relies on thunk middleware
        // Calculate the different 90 minute intervals
        let cycles = [];
        let tempTime = moment(timeObj.time); // Create new object to stop it from altering the original
        
        for (let i = 7; i >= 1; i--) {
            let sleepDuration = timeObj.sleepCycleLength * i; // Calculate the time actually sleeping with accounting for average time to fall asleep
            let bedTime = sleepDuration + +timeObj.fallAsleepTime; // Need the plus signs to force this to evaluate this as a number, not a string

            cycles.push({
                type: (i < 3 ? TYPE_NAP: TYPE_SLEEP),
                cycleCount: i,
                cycleStart: moment(tempTime).subtract(sleepDuration, 'minutes'), // Create new moment objects with different offsets
                cycleEnd: moment(tempTime),
                duration: sleepDuration,
                bedTimeStart: moment(tempTime).subtract(bedTime, 'minutes') // Calculate time to go to bed before actually sleeping
            });
        }

        // Dispatch action to reducer 
        dispatch(updateSleepCycles(cycles));
        dispatch(clearSelectedCycle()); // Clear selected cycle data
    }
}

// Update selected cycle action creator
export function updateSelectedCycle(cycle) {
    return {
        type: UPDATE_SELECTED_CYCLE,
        cycle
    }
}

export function clearSelectedCycle() {
    return {
        type: CLEAR_SELECTED_CYCLE
    }
}