import axios from "axios";
import authHeader from "../../../services/auth-header";
import {BASE_ROUTE} from "../../../config/BaseRoutes";

export const getAllTeachers = () => {
    return (dispatch) => {
        axios.get(`https://api.fhict.nl/people/`, {headers: authHeader()})
            .then(res => {
                dispatch({type: "GET_ALL_TEACHERS", data: res.data})
            })
    }
}

export const putTeacherLocation = (teacher) => {
    axios.put(`${BASE_ROUTE.API}/teacher/edit/location`, teacher)
}

export const getTeacherByiPcn = (iPcn) => {
    return (dispatch, getState) => {
        const allTeachers = getState().teacher.teachers

        const teacher = allTeachers.find(teacher => teacher.id === iPcn)
        dispatch({type: 'GET_SELECTED_TEACHER', data: teacher})
    }
}

export const clearSelectedTeacher = () => {
    return (dispatch) => {
        dispatch({type: 'GET_SELECTED_TEACHER'})
    }
}

