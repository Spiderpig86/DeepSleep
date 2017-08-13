import moment from 'moment';

// Declare action consts
export const UPDATE_SLEEP_CYCLES = 'UPDATE_SLEEP_CYCLES'; // Const for updating times to fall asleep
export const UPDATE_SELECTED_CYCLE = 'UPDATE_SELECTED_CYCLE'; // Const for updating the sleep stats component

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
        let sleepDuration = 0;
        for (let i = 7; i >= 1; i--) {
            sleepDuration = timeObj.sleepCycleLength * i; // Calculate the time actually sleeping with accounting for average time to fall asleep
            cycles.push({
                type: (i < 3 ? TYPE_NAP: TYPE_SLEEP),
                cycleCount: i,
                cycleStart: moment(tempTime).subtract(sleepDuration, 'minutes'), // Create new moment objects with different offsets
                cycleEnd: moment(tempTime),
                duration: sleepDuration,
                bedTimeStart: moment(tempTime).subtract(sleepDuration + timeObj.fallAsleepTime, 'minutes'), // Calculate time to go to bed before actually sleeping
            });
        }

        // Dispatch action to reducer 
        dispatch(updateSleepCycles(cycles));
    }
}

// Update selected cycle action creator
export function updateSelectedCycle(cycle) {
    return {
        type: UPDATE_SELECTED_CYCLE,
        cycle
    }
}