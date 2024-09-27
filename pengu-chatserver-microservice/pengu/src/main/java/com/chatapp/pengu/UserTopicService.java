package com.chatapp.pengu;

import org.apache.kafka.clients.admin.NewTopic;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.kafka.config.ConcurrentKafkaListenerContainerFactory;
import org.springframework.kafka.core.KafkaAdmin;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.kafka.listener.ConcurrentMessageListenerContainer;
import org.springframework.kafka.listener.MessageListener;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Service;

import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;

@Service
public class UserTopicService {

    @Autowired
    private KafkaTemplate<String, String> kafkaTemplate;

    @Autowired
    private SimpMessagingTemplate messagingTemplate;

    private final Map<String, ConcurrentMessageListenerContainer<String, String>> activeContainers = new ConcurrentHashMap<>();

    @Autowired
    private ConcurrentKafkaListenerContainerFactory<String, String> kafkaListenerContainerFactory;

    @Autowired
    private KafkaAdmin kafkaAdmin;

    @Autowired
    private KafkaConfiguration kafkaConfiguration;

    public void createKafkaListenerForUserTopic(String userId, String topicName) {

        kafkaAdmin.createOrModifyTopics(kafkaConfiguration.createUserTopic(topicName));
        ConcurrentMessageListenerContainer<String, String> container =
                kafkaListenerContainerFactory.createContainer(topicName);

        container.getContainerProperties().setGroupId("user-group-" + userId);
        container.setupMessageListener((MessageListener<String, String>) record -> {
            System.out.println("Received message from topic: " + topicName + " Message: " + record.value());
            messagingTemplate.convertAndSend("/topic/user/" + userId, record.value());
        });

        //container.setConcurrency(3);

        container.start();

        activeContainers.put(topicName, container);

    }

    public void stopKafkaListener(String topicName) {
        ConcurrentMessageListenerContainer<String, String> container = activeContainers.get(topicName);
        if (container != null) {
            container.stop();
            activeContainers.remove(topicName);
            System.out.println("Stopped listener for topic: " + topicName);
        }
    }

    public void sendMessageToUserTopic(String topicName, String message) {
        kafkaTemplate.send(topicName, message);
    }

}
