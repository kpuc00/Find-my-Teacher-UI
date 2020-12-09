import React, {Component} from 'react';

import SockJs from 'sockjs-client'
import Stomp from 'stompjs'
import {Card} from "react-bootstrap";

let stompClient = null;

class SocketTest extends Component {

    connect = () => {
        let socket = new SockJs('/test');
        stompClient = Stomp.over(socket);

        stompClient.connect({}, () => {
            stompClient.subscribe('/messages', greeting => {
                console.log(JSON.parse(greeting.body).content);
            });
        });
    }

    send = () => {
        const name = document.querySelector('#name').value
        stompClient.send("/app/hello", {}, JSON.stringify({'name': name}));
    }

    render() {
        return (
            <Card>
                <div onClick={() => this.connect()}>Connect</div>
                <input id={'name'}/>
                <div onClick={() => this.send()}>Send Message</div>
            </Card>
        );
    }
}

export default SocketTest;