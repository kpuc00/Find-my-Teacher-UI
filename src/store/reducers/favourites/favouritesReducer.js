const favouritesReducer = (state = [], action) => {
    switch (action.type) {
        case 'GET_FAVOURITE_TEACHERS_IPCN':
            return action.data
        default:
            return state
    }
}


export default favouritesReducer