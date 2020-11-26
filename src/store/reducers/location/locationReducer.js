const locationReducer = (state = {}, action) => {
    switch (action.type) {
        case 'GET_USER_LOCATION':
            return {
                ...state,
                userLocation: action.data
            }
        case 'GET_TEACHER_LOCATION':
            return {
                ...state,
                teacherLocation: action.data
            }
        default:
            return state
    }
}

export default locationReducer;