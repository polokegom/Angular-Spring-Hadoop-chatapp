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
    @Field("userpassword")
    private String userpassword;
    @Field("kafkacluster")
    private String kafkacluster;
    @Field("kafkabrokerIP")
    private String kafkabrokerIP;

    public String getID() {
        return id;
    }
    public void setUserName(String username) {
        this.username = username;
    }

    public void setUserEmail(String useremail) {
        this.useremail = useremail;
    }


    public void setUserPassword(String userpassword) {
        this.userpassword = userpassword;
    }


    public void setUserKafkaCluster(String kafkacluster) {
        this.kafkacluster = kafkacluster;
    }

    public void setUserKafkaBrokerIP(String kafkabrokerIP) {
        this.kafkabrokerIP = kafkabrokerIP;
    }

    public String getUserName() {
        return this.username;
    }

    public String getUserEmail() {
        return this.useremail;
    }

    public String getUserPassword() {
        return this.userpassword;
    }

    public String getUserKafkaCluster() {
        return this.kafkacluster;
    }

    public String getUserKafkaBrokerIP() {
        return this.kafkabrokerIP;
    }

    @Override
    public String toString() {
        return "{" +
                "id:'" + id + '\'' +
                ", username:'" + username + '\'' +
                ", useremail:'" + useremail + '\'' +
                ", userpassword:'" + userpassword + '\'' +
                ", kafkacluster:'" + kafkacluster + '\'' +
                ", kafkabrokerIP:'" + kafkabrokerIP + '\'' +
                '}';
    }
}
