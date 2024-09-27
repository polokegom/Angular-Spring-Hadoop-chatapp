import SockJS from 'sockjs-client';
import {Client} from '@stomp/stompjs'

let chatSocket = new SockJS('localhost:9096/server');
const stompClient = new Client({
    webSocketFactory: () => socket,
    reconnectDelay: 5000,  // Reconnect after 5 seconds if disconnected
    debug: (str) => {
        console.log('STOMP Debug:', str);
    }
});

stompClient.activate();

stompClient.onConnect = (frame)=>{

    stompClient.subscribe('/subscriber', (res)=> {

        console.log('Received messageL\n\n', res.body);
    })

    stompClient.publish({
        destination:'/broker/publisher',
        body: JSON.stringify({name:'John Doe'})

    })

}

stompClient.onStompError = (frame) =>{

    console.error('Error: The server might be down')
    console.error("Additional Info:", frame.body)
}

