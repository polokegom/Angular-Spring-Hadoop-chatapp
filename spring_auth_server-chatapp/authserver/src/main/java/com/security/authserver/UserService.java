package com.security.authserver;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

@Service
public class UserService {


    @Autowired
    private UserDatasource userDatasource;
    
    public UserService(){
        
    }

    public List<User> getAllUsers() {
        return userDatasource.findAll();

    }

    public boolean verifyUserDetails(String userEmail, String userPassword){

        Optional<User> validUser = userDatasource.checkIsValidUser(userEmail, userPassword);

        return validUser.isPresent();

    }

    public User getUserById(String Id) {
        return userDatasource.findById(Id).orElse(null); 
    }
    public User saveUser(User user){
        
        return userDatasource.save(user);
        
    }
}
