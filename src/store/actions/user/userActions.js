import axios from 'axios';
import authHeader from "../../../services/auth-header";

export const getUserPicture = (iPcn) => {
    return (dispatch) => {
        axios.get(`https://api.fhict.nl/pictures/${iPcn}.jpg`, { headers: authHeader(), responseType: 'arraybuffer' })
            .then(data => {
                const b64Data = btoa(
                    new Uint8Array(data.data).reduce(
                        (dataArray, byte) => {
                            return dataArray + String.fromCharCode(byte);
                        },
                        ''
                    )
                );

                const userAvatarData = {
                    key: 'userAvatar',
                    value: `data:image/png;base64,${b64Data}`
                };

                dispatch({ type: 'GET_USER_PICTURE', data: userAvatarData })
            })
    }
}

export const getCurrentUser = () => {
    return (dispatch) => {
        axios.get(`https://api.fhict.nl/people/me`, { headers: authHeader() })
            .then(res => {
                dispatch({ type: 'GET_USER', data: res.data })
            })
    }
}

export const getOwnLocation = () => {
    return (dispatch) => {
        axios.get(`https://api.fhict.nl/location/current`, { headers: authHeader() })
            .then(res => {
                dispatch({ type: 'GET_OWN_LOCATION', data: res.data })
                console.log(res.data)
            })
    }
}

export const saveOwnLocation = (data) => {
    return (dispatch, getState) => {
        console.log(data)
        const iPcn = getState().user.user.id
        const teacher = {
            iPcn: iPcn,
            coordinates: {
                x: data[0].mapCoordinate.x,
                y: data[0].mapCoordinate.y,
                floorHierarchy: data[0].mapInfo.mapHierarchyFloor
            }
        }
        console.log(teacher)
        axios.put(`/teacher/edit`, teacher)
    }
}