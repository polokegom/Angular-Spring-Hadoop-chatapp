package com.chatapp.springchatapp;
import org.springframework.context.annotation.Configuration;
import org.springframework.messaging.simp.config.MessageBrokerRegistry;
import org.springframework.web.socket.config.annotation.EnableWebSocket;
import org.springframework.web.socket.config.annotation.EnableWebSocketMessageBroker;
import org.springframework.web.socket.config.annotation.StompEndpointRegistry;
import org.springframework.web.socket.config.annotation.WebSocketMessageBrokerConfigurer;
import org.springframework.web.socket.server.HandshakeInterceptor;
import java.util.Map;

import org.springframework.http.server.ServerHttpRequest;
import org.springframework.http.server.ServerHttpResponse;
import org.springframework.web.socket.WebSocketHandler;

@Configuration
@EnableWebSocketMessageBroker
public class SocketSettings implements WebSocketMessageBrokerConfigurer, HandshakeInterceptor {
    

    @Override
    public void configureMessageBroker(MessageBrokerRegistry config){

        config.enableSimpleBroker("/webchat-request");
        config.setApplicationDestinationPrefixes("/webchat-response");
    }

    @Override
    public boolean beforeHandshake(ServerHttpRequest request, ServerHttpResponse response, WebSocketHandler wsHandler, Map<String, Object> attributes) throws Exception{

        return false;
    }

    @Override
    public void afterHandshake(ServerHttpRequest request, ServerHttpResponse response, WebSocketHandler wsHandler,
            Exception exception) {
        throw new UnsupportedOperationException("Unimplemented method 'afterHandshake'");
    }
}
