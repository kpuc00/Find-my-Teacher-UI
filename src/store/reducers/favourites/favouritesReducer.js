const favouritesReducer = (state = [], action) => {
    switch (action.type) {
        case 'GET_FAVOURITE_TEACHERS_IPCN':
            if (action.data)
                return action.data
            return state
        default:
            return state
    }
}


export default favouritesReducer