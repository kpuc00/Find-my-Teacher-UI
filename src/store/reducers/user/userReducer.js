const userReducer = (state = {}, action) => {
    switch (action.type) {
        case 'GET_USER':
            return action.data
        default:
            return state
    }
}

export default userReducer;