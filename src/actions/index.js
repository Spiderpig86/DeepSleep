import moment from 'moment';

// Declare action consts
export const UPDATE_SLEEP_CYCLES = 'UPDATE_SLEEP_CYCLES'; // Const for updating times to fall asleep

// Export types of sleep
export const TYPE_NAP = 'NAP';
export const TYPE_SLEEP = 'SLEEP';

function updateSleepCycles(cycles) {
    return {
        type: UPDATE_SLEEP_CYCLES,
        cycles // Contains 6 different times
    }
}

export function getCycles(time) {
    // Time is a moment object with hours, minutes, and seconds already set
    return function(dispatch) { // Relies on thunk middleware
        // Calculate the different 90 minute intervals
        let cycles = [];
        let tempTime = moment(time); // Create new object to stop it from altering the original
        for (let i = 6; i >= 1; i--) {
            cycles.push({
                type: (i < 3 ? TYPE_NAP: TYPE_SLEEP),
                cycleCount: i,
                cycleStart: moment(tempTime).subtract(90 * i, 'minutes'), // Create new moment objects with different offsets
                duration: 90 * i
            });
        }

        // Dispatch action to reducer 
        dispatch(updateSleepCycles(cycles));
    }
}