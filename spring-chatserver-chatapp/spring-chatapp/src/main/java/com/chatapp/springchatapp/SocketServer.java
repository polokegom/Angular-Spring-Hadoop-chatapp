package com.chatapp.springchatapp;
import org.springframework.context.annotation.Configuration;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.messaging.simp.config.MessageBrokerRegistry;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;
import org.springframework.web.socket.*;
import org.springframework.web.socket.config.annotation.EnableWebSocket;
import org.springframework.web.socket.config.annotation.EnableWebSocketMessageBroker;
import org.springframework.web.socket.config.annotation.StompEndpointRegistry;

import jakarta.websocket.OnOpen;
import jakarta.websocket.server.ServerEndpoint;

@Component
public class SocketServer {
    
    @MessageMapping("/sendmessage")

    public void sendMessage(String sms){

    }

    //Personal note: Link Kafka Consumer to this section
    @Scheduled(fixedRate=1000)
    public void notifications(){

        
    }
}
