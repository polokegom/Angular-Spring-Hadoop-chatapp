package com.chatapp.springchatapp;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.messaging.handler.annotation.DestinationVariable;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.stereotype.Controller;

/**
 *
 *
 */
@Controller
public class KafkaProducer {

    @Autowired
    private KafkaTemplate<String, String> KafkaTemplate;

    @MessageMapping("/send/{userTopic}")
    public void sendKafka(String message, @DestinationVariable String userTopic) {

        KafkaTemplate.send(userTopic, message);

    }
    
}
