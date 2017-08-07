// Declare action consts
export const UPDATE_SLEEP_CYCLES = 'UPDATE_SLEEP_CYCLES'; // Const for updating times to fall asleep

function updateSleepCycles(cycles) {
    return {
        type: UPDATE_SLEEP_CYCLES,
        cycles // Contains 6 different times
    }
}

export function getCycles(time) {
    return function(dispatch) {
        // Calculate the different 90 minute intervals
        
    }
}