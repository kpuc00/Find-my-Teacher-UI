const userReducer = (state = {}, action) => {
    switch (action.type) {
        case 'GET_USER_PICTURE':
            return {
                ...state,
                userAvatarData: action.data,
            }
        default:
            return state
    }
}

export default userReducer;