package com.chatapp.springchatapp;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.kafka.annotation.KafkaListener;

public class KafkaConsumer {
    
    @Value("${kafka.group.default}")
    private String userGroup;
    @Value("${kafka.topic.default}")
    private String userTopic;
    
    @KafkaListener(topics = "#{userTopic}", groupId = "#{userGroup}",autoStartup = "false")
    public void consume(String message) {
        System.out.println("Received message: " + message);


    }
}
