import axios from "axios";
import {BASE_ROUTE} from "../../../config/BaseRoutes";


export const getFavouriteTeachersIpcn = (iPcn) => {
    return (dispatch) => {
        axios.get(`${BASE_ROUTE.API}/student/${iPcn}/favourites`)
            .then(response => {
                dispatch({type: 'GET_FAVOURITE_TEACHERS_IPCN', data: response.data.favourites})
            })
            .catch(err => console.log(err))
    }
}

export const editFavouriteTeachersIpcn = (student) => {
    return (dispatch) => {
        axios.put(`${BASE_ROUTE.API}/student/edit/favourites`, student)
            .then(() => dispatch(getFavouriteTeachersIpcn(student.iPcn)))
    }
}