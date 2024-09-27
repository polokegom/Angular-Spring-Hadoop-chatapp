package com.chatapp.pengu;

import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Controller;

@Controller
public class WebsocketController {

    @Autowired
    private UserTopicService userTopicService;


    @Autowired
    private SimpMessagingTemplate messagingTemplate;

    // User subscribes to a topic
    @MessageMapping("/subscribe")
    @Async
    public void subscribeToTopic(String payload) {
        // Payload will include userId and topic they want to subscribe to
        JSONObject userMessage = new JSONObject(payload);
        String userID = (String) userMessage.get("userID");
        String topicName = (String) userMessage.get("topic");
        //container.setConcurrency(3);
        // Dynamically create a Kafka listener for the user's specified topic
        userTopicService.createKafkaListenerForUserTopic(userID, topicName);
    }

    // User sends a message to a specific topic
    @MessageMapping("/sendmessage")
    public void sendMessageToTopic(String payload) {

        JSONObject userMessage = new JSONObject(payload);
      //  System.out.println("---Websocket message received" + payload);
        // Payload will include topicName and message

        String topicName = (String) userMessage.get("topic");
        String message =  (String) userMessage.get("message");//

        System.out.println("---topic name: " + topicName);

        // Send the message to the specified Kafka topic
        userTopicService.sendMessageToUserTopic(topicName, message);
    }



}
