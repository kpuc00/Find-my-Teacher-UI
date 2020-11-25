import axios from "axios";
import {getAllTeachers, getAllTeachersFromState} from "../teacher/teacherActions";

export const getFavouriteTeachersIpcn = (iPcn) => {
    return (dispatch) => {
        axios.get(`http://localhost:8080/student/${iPcn}/favourites`)
            .then(response => {
                dispatch({type: 'GET_FAVOURITE_TEACHERS_IPCN', data: response.data.favourites})
            })
    }
}

export const editFavouriteTeachersIpcn = (student) => {
    return (dispatch) => {
        axios.put(`http://localhost:8080/student/edit/favourites`, student)
            .then(() => dispatch(getFavouriteTeachersIpcn(student.iPcn)))
    }
}