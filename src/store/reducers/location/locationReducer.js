const locationReducer = (state = {}, action) => {
    switch (action.type) {
        case 'GET_OWN_LOCATION':
            console.log(action.data)
            return {
                ...state,
                ownLocation: action.data
            }
        default:
            return state
    }
}

export default locationReducer;