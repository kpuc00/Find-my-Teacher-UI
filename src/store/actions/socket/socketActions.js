export const toggleIsSocketConnected = () => {
    return (dispatch) => {
        dispatch({type: 'SET_CONNECTED', data: true})
    }
}