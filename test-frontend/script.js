import SockJS from 'sockjs-client';
import {Client} from '@stomp/stompjs'

let chatSocket = new SockJS('localhost:7080/chatserver');
const stompClient = new Client({
    webSocketFactory: () => socket,
    reconnectDelay: 5000,  // Reconnect after 5 seconds if disconnected
    debug: (str) => {
        console.log('STOMP Debug:', str);
    }
});

stompClient.onConnect = (frame)=>{

    stompClient.subscribe('notification', (res)=> {

        console.log('Received messageL\n\n', res.body);
    })

    stompClient.publish({
        destination:'clientmessage',
        body: JSON.stringify({name:'John Doe'})

    })

}

stompClient.onStompError = (frame) =>{

    console.error('Error: The server might be down')
    console.error("Additional Info:", frame.body)
}

stompClient.activate();