package com.chatapp.springchatapp;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Service;

/**
 *
 *
 */
@Service
public class KafkaConsumer {
    

    private final SimpMessagingTemplate messageTemplate;

    public KafkaConsumer(SimpMessagingTemplate messageTemplate) {
        this.messageTemplate = messageTemplate;
    }

    @KafkaListener(topics = "#{kafka.user-topics}", groupId = "#{userGroup}",autoStartup = "false")
    public void consume(String message) {
        messageTemplate.convertAndSend("");
        System.out.println("Received message: " + message);


    }
}
