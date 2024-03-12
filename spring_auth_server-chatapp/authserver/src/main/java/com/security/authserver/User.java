package com.security.authserver;
import java.io.Serializable;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;
/**
 * JavaBean of Table Users (Pojo)
 */
@Document(collection = "users")
public class User implements Serializable{
    @Id
    private String id;
    @Field("username")
    private String username;
    @Field("useremail")
    private String useremail;
    @Field("password")
    private String password;
    @Field("kafkacluster")
    private String kafkacluster;
    @Field("kafkabrokerIP")
    private String kafkabrokerIP;

    public String getID() {
        return id;
    }

    public String getUserName() {
        return username;
    }

    public String getUserEmail() {
        return useremail;
    }

    public String getUserPassword() {
        return password;
    }

    public String getUserKafkaCluster() {
        return kafkacluster;
    }

    public String getUserKafkaBrokerIP() {
        return kafkabrokerIP;
    }

    @Override
    public String toString() {
        return "{" +
                "id='" + id + '\'' +
                ", username='" + username + '\'' +
                ", useremail='" + useremail + '\'' +
                ", password='" + password + '\'' +
                ", kafkacluster='" + kafkacluster + '\'' +
                ", kafkabrokerIP='" + kafkabrokerIP + '\'' +
                '}';
    }
}
