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