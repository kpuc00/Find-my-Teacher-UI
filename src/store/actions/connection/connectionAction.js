import axios from "axios";

export const setIsConnected = (connectionValue) => {
    return (dispatch, getState) => {
        dispatch({type: "SET_CONNECTED", data: connectionValue})
    }
}


