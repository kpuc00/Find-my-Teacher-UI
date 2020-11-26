const teacherReducer = (state = [], action) => {
    switch (action.type) {
        case 'GET_ALL_TEACHERS':
            return {
                ...state,
                teachers: action.data
            }
        case 'GET_SELECTED_TEACHER':
            return {
                ...state,
                selectedTeacher: action.data
            }
        default:
            return state
    }
}

export default teacherReducer;