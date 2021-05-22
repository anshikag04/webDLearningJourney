const { createStore } = require('redux')

// REDUCER
function counterReducer(state = { value: 0 }, action) {
    switch (action.type) {
        case 'counter/incremented':
            return { value: state.value + 1 }
        case 'counter/decremented':
            return { value: state.value - 1 }
        default:
            return state
    }
}

// THE STORE
let store = createStore(counterReducer)

// DISPATCH
console.log(store.getState())
store.dispatch({ type: 'counter/incremented' })
console.log(store.getState())

