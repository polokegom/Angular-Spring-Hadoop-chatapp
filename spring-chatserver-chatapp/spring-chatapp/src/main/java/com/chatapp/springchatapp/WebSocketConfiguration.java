package com.chatapp.springchatapp;
import org.springframework.context.annotation.Configuration;
import org.springframework.messaging.simp.config.MessageBrokerRegistry;
import org.springframework.web.socket.config.annotation.EnableWebSocketMessageBroker;
import org.springframework.web.socket.config.annotation.StompEndpointRegistry;
import org.springframework.web.socket.config.annotation.WebSocketMessageBrokerConfigurer;


@Configuration
@EnableWebSocketMessageBroker
public class WebSocketConfiguration implements WebSocketMessageBrokerConfigurer/*, HandshakeInterceptor*/ {


    @Override
    public void configureMessageBroker(MessageBrokerRegistry config){

        config.enableSimpleBroker("/sendmessage");
        config.setApplicationDestinationPrefixes("/chat");
    }

    @Override
    public void registerStompEndpoints(StompEndpointRegistry registry) {
        // Register the WebSocket endpoint that the JavaScript client will connect to
        registry.addEndpoint("/chatserver").setAllowedOrigins("*").withSockJS();
    }

    /*
    @Override
    public boolean beforeHandshake(ServerHttpRequest request, ServerHttpResponse response, WebSocketHandler wsHandler, Map<String, Object> attributes) throws Exception{
        
        String secretKey = "f7a98c5e66c74127d28e93ab589fd98d";
        String jwtToken = (String)attributes.get("jwtToken");
        //Fix the below JWT Authentication
        //Jwt jwt =  NimbusJwtDecoder.withSecretKey(secretKey).build().decode(jwtToken);
        return false;
    }

    @Override
    public void afterHandshake(ServerHttpRequest request, ServerHttpResponse response, WebSocketHandler wsHandler,
            Exception exception) {
        throw new UnsupportedOperationException("Unimplemented method 'afterHandshake'");
    }*/
}
