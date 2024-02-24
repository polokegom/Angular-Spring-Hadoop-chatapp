package com.chatapp.springchatapp;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class SpringChatappApplication {
/*
 * - Standby steps:
 * 1  Wait for connections
 * 
 * - New connection steps:
 * 1. Verify JWT Token
 * 2. Establish WebSocket connection
 * 3. During init, Find Kafka metadata for connection
 * 4. During Init, Load all messages of clients Kafka topic
 * 
 * - Connection established:
 * 1. Wait for new messages from Clients topic in Kafka Cluster
 */
	public static void main(String[] args) {
		
		//
		//
		//* Verify Oauth
		//* Establish WebSocket connection
		//
		//* Init connection, Load all messages of client
		SpringApplication.run(SpringChatappApplication.class, args);
	}

}
