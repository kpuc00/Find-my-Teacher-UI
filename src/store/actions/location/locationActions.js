import axios from 'axios';
import authHeader from "../../../services/auth-header";

export const getCurrentUserLocation = () => {
    return (dispatch) => {
        //send get request to fontys api to get the location
        axios.get(`https://api.fhict.nl/location/current`, {headers: authHeader()})
            .then(res => {
                const data = res.data[0];

                const locationCurrent = {
                    mapHierarchyFloor: data.mapInfo.mapHierarchyFloor,
                    mapCoordinate: data.mapCoordinate,
                    image: data.mapInfo.image,
                    floorDimension: data.mapInfo.floorDimension
                }

                dispatch({type: 'GET_USER_LOCATION', data: locationCurrent})
            })
            .catch(err => console.log(err))
    }
}


export const getTeacherLocation = (iPcn) => {
    return (dispatch, getState) => {
        /*axios.get(`/teacher/${iPcn}/location`)
            .then(response => {
                dispatch({type: 'GET_TEACHER_LOCATION', data: response.data})
            })*/

        const teachersLocations = getState().location.teachersLocations
        const teacher = teachersLocations.find(t =>  t.teacher.iPcn === iPcn)
        dispatch({type: 'GET_TEACHER_LOCATION', data: teacher.teacher})
    }
}

export const updateTeachersLocations = (teacher) => {
    return (dispatch, getState) => {
        const teachersLocations = getState().location.teachersLocations

        const updatedTeacher = teachersLocations.find(t => t.iPcn === teacher.iPcn)

        if (updatedTeacher) {
            teachersLocations[teachersLocations.indexOf(updatedTeacher)] = teacher
        } else {
            teachersLocations.push(teacher)
        }

        dispatch({type: 'UPDATE_TEACHERS_LOCATIONS', data: teachersLocations})
        dispatch(getTeacherLocation(teacher.teacher.iPcn))
    }
}

export const clearSelectedTeacherLocation = () => {
    return (dispatch) => {
        dispatch({type: 'GET_TEACHER_LOCATION'})
    }
}

export const postLocationToApi = () => {
    return (dispatch) => {
        //send post request to our api to save a teacher
    }
}