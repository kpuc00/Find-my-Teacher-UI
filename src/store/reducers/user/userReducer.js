const userReducer = (state = {}, action) => {
    switch (action.type) {
        case 'GET_USER_PICTURE':
            return {
                ...state,
                userAvatarData: action.data
            }
        case 'GET_USER':
            return{
                ...state,
                user: action.data
            }
        default:
            return state
    }
}

export default userReducer;