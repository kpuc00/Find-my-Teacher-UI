const teacherReducer = (state = {}, action) => {
    switch (action.type) {
        case 'GET_ALL_TEACHERS':
            return {
                ...state,
                teachers: action.data
            }
        default:
            return state
    }
}

export default teacherReducer;