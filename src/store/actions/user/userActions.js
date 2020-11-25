import axios from 'axios';
import authHeader from "../../../services/auth-header";

const getUserPicture = async (iPcn) => {

        return await axios.get(`https://api.fhict.nl/pictures/${iPcn}.jpg`, {headers: authHeader(), responseType: 'arraybuffer'})


}

export const getCurrentUser = () => {
    return (dispatch) => {
        axios.get(`https://api.fhict.nl/people/me`, {headers: authHeader()})
            .then(res => {
                //Decode profile picture
                getUserPicture(res.data.id)
                    .then(data => {
                        const b64Data = btoa(
                            new Uint8Array(data.data).reduce(
                                (dataArray, byte) => {
                                    return dataArray + String.fromCharCode(byte);
                                },
                                ''
                            )
                        );
                        const profilePic = `data:image/png;base64,${b64Data}`

                        //create the correct data
                        data = {
                            ...res.data, //set original data
                            profilePic //add the decoded picture
                        }

                        dispatch({type: 'GET_USER', data: data}) //return the correct data
                    })


            })
    }
}

