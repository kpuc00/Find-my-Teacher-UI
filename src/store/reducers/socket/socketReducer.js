const socketReducer = (state = {}, action) => {
    switch (action.type) {
        case 'SET_CONNECTED':
            return {
                isConnected: action.data
            }
        default:
            return state
    }
}

export default socketReducer;