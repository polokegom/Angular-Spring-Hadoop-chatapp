import SockJS from 'sockjs-client/dist/sockjs.min.js';
import {Client} from '@stomp/stompjs'


let stompClient = null;

function connect(userId) {



    const chatSocket = new SockJS('http://localhost:8091/ws');

    const stompClient = new Client({
      webSocketFactory: () => chatSocket,
      reconnectDelay: 5000,  // Reconnect after 5 seconds if disconnected
      debug: (str) => {
      }
    });

    stompClient.activate();
    alert("Everything is working")

    stompClient.onConnect = (frame)=>{
     alert(frame)

      document.getElementById("subscribeBtn").addEventListener("click", () => {
        const topicName = document.getElementById("topicInput").value;
        stompClient.subscribe('/topic/user/polokego', (res)=> {
          alert("yay")
          showMessage( res.body);
        });

        stompClient.publish({
          destination:'/app/subscribe',
          body: JSON.stringify({userID:userId, topic:topicName})

        })

      });
      
      document.getElementById("sendBtn").addEventListener("click", () => {
        const topicName = document.getElementById("sendTopicInput").value;
        const message = document.getElementById("messageInput").value;
        alert("good")
        
        stompClient.publish({
          destination:'/app/sendmessage',
          body:JSON.stringify({topic: topicName,
              message: message
        })

        })

      });



    }
}


function showMessage(message) {
  const responseDiv = document.getElementById("response");
  const p = document.createElement("p");
  p.appendChild(document.createTextNode(message));
  responseDiv.appendChild(p);
}

document.getElementById("connectBtn").addEventListener("click", () => {
  const userId = document.getElementById("userIdInput").value;
  alert(userId + " ---------")
  connect(userId);
});
