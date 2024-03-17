package com.security.authserver;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Query;

public class KafkaTopicService {
    @Autowired
    MongoTemplate mongoTemplate;


    public KafkaTopic getKafkaTopic() {
        Query query = new Query().limit(1);
       
        return  mongoTemplate.findOne(query, KafkaTopic.class);;
    }
}
