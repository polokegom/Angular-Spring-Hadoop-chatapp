package com.security.authserver;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface UserDatasource extends MongoRepository<User,String> {
    
}
