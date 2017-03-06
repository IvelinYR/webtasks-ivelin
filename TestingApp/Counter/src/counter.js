export function counter(state, command) {

    if (typeof command === 'string') {
        var command1 = command.toUpperCase();

    }

    if (state === undefined) {
        return state = 0
    }
    else if (typeof state === 'string') {
        return 'State must be digit'
    }
    else if (command1 === 'INCREMENT') {
        return state + 1
    }
    else if (command1 === 'DECREMENT') {
        return state - 1
    }
    else if (command1 !== 'INCREMENT' && command1 != 'DECREMENT') {
        return 'Command must be INCREMENT or DECREMENT'
    }

    return state
}