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
    }
}


export const getTeacherLocation = (iPcn) => {
    return (dispatch) => {
        axios.get(`/teacher/${iPcn}/location`)
            .then(response => {
                dispatch({type: 'GET_TEACHER_LOCATION', data: response.data})
            })
    }
}

export const postLocationToApi = () => {
    return (dispatch) => {
        //send post request to our api to save a teacher
    }
}