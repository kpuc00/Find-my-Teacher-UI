import SockJs from 'sockjs-client'
import Stomp from 'stompjs'
import {store} from '../index';
import {updateTeachersLocations} from "../store/actions/location/locationActions";
import {toggleIsSocketConnected} from "../store/actions/socket/socketActions";

let stompClient = null;

export const socket = {
    connect: () => {
        let socket = new SockJs('/socket');
        stompClient = Stomp.over(socket);

        stompClient.connect({}, () => {
            store.dispatch(toggleIsSocketConnected())
            stompClient.subscribe('/locations', teacher => {
                store.dispatch(updateTeachersLocations(JSON.parse(teacher.body)))
            });
        });
    },

    send: (teacher) => {
        stompClient.send("/teacher/edit/location", {}, JSON.stringify({teacher: teacher}));
    }
}
