package com.security.authserver;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

@Document(collection="freekafkatopics")
public class KafkaTopic {
    
    @Id
    private String id;
    @Field("kafkacluster")
    private String kafkacluster;
    @Field("kafkabrokerIP")
    private String kafkabrokerIP;

    public void setID(String id) {
        this.id = id;
    }

    public void setKafkaCluster(String kafkacluster) {

        this.kafkacluster = kafkacluster;
    }

    public void setKafkaBrokerIP(String kafkabrokerIP) {
        this.kafkabrokerIP = kafkabrokerIP;
    }

    public String getID() {
        return id;
    }

    public String getKafkaBrokerIP() {
        return kafkabrokerIP;
    }

    public String getKafkaCluster() {

        return kafkacluster;
    }
    
}
