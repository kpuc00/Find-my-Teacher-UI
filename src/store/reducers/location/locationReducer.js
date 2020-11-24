const locationReducer = (state = {}, action) => {
    switch (action.type) {
        case 'GET_USER_LOCATION':
            return action.data
        default:
            return state
    }
}

export default locationReducer;