import axios from "axios";

export const getFavouriteTeachersIpcn = (iPcn) => {
    return (dispatch) => {
        axios.get(`/student/${iPcn}/favourites`)
            .then(response => {
                dispatch({type: 'GET_FAVOURITE_TEACHERS_IPCN', data: response.data.favourites})
            })
            .catch(err => console.log(err))
    }
}

export const editFavouriteTeachersIpcn = (student) => {
    return (dispatch) => {
        axios.put(`/student/edit/favourites`, student)
            .then(() => dispatch(getFavouriteTeachersIpcn(student.iPcn)))
    }
}