import SockJs from 'sockjs-client'
import Stomp from 'stompjs'
import {store} from '../index';
import {updateTeachersLocations} from "../store/actions/location/locationActions";
import {toggleIsSocketConnected} from "../store/actions/socket/socketActions";
import {BASE_ROUTE} from "../config/BaseRoutes";

let stompClient = null;

export const socket = {
    connect: () => {
        let socket = new SockJs(`${BASE_ROUTE.API}/socket`);
        stompClient = Stomp.over(socket);

        stompClient.connect({ withCredentials : false}, () => {
            store.dispatch(toggleIsSocketConnected())
            stompClient.subscribe(`${BASE_ROUTE.API}/locations`, teacher => {
                store.dispatch(updateTeachersLocations(JSON.parse(teacher.body)))
            });
        });
    },

    send: (teacher) => {
        stompClient.send(`${BASE_ROUTE.API}/teacher/edit/location`, {}, JSON.stringify({teacher: teacher}));
    }
}
