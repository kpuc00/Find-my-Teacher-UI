import axios from "axios";
import authHeader from "../../../services/auth-header";

export const getAllTeachers = () => {
    return (dispatch) => {
        axios.get(`https://api.fhict.nl/people/`, {headers: authHeader()})
            .then(res => {
                dispatch({type: "GET_ALL_TEACHERS", data: res.data})
            })
    }
}

export const putTeacherLocation = (teacher) => {
    axios.put(`/teacher/edit/location`, teacher)
}

export const getTeacherByiPcn = (iPcn) => {
    return (dispatch, getState) => {
        const allTeachers = getState().teacher.teachers

        const teacher = allTeachers.find(teacher => teacher.id === iPcn)

        dispatch({type: 'GET_SELECTED_TEACHER', data: teacher})

    }
}

