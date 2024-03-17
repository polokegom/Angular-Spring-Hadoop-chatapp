package com.security.authserver;
import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

public interface UserDatasource extends MongoRepository<User,String> {
    

    @Query("{'useremail':?0,'userpassword':?1}")
    Optional<User> checkIsValidUser(String userEmail, String userPassword);
    
    @Query("{$or:[{'username':?0},{'useremail':?1}]}")
    Optional<User> checkFoundEmailOrUsername(String userEmail, String userName);

}
