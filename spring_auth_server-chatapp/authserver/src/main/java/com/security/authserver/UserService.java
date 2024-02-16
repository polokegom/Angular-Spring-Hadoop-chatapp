package com.security.authserver;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class UserService {


    @Autowired
    private UserDatasource userDatasource;
    
    public UserService(){
        
    }

    public List<User> getAllUsers() {
        return userDatasource.findAll();

    }

    public User getUserById(String Id) {
        return userDatasource.findById(Id).orElse(null); 
    }
}
