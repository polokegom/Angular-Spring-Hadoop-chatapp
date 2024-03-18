package com.security.authserver;

import org.springframework.stereotype.Service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;

@Service
public class KafkaTopicService {
    @Autowired
    MongoTemplate mongoTemplate;

    public KafkaTopicService() {
        
    }


    public KafkaTopic getKafkaTopic() {
        
        Query query = new Query().limit(1);
        KafkaTopic kafkaTopic = mongoTemplate.findOne(query, KafkaTopic.class);;
      
        if (kafkaTopic != null) {
            
            Query queryDel = new Query();
            queryDel.addCriteria(Criteria.where("id").is(kafkaTopic.getID()));
            mongoTemplate.remove(queryDel,KafkaTopic.class);
        }
        return  kafkaTopic;
        
    }
}
