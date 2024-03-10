package com.security.authserver;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ApiController {
    
    @Autowired
    private UserService userService;
    private final String SECREY_KEY = "f7a98c5e66c74127d28e93ab589fd98d";
    @PostMapping("/authenticate") 
    public List<User> authenticateUser(@RequestBody User user) {
        
        userService.verifyUserDetails(user);
        List<User> listOfUsers = userService.getAllUsers();

        return userService.getAllUsers();
    }

    public Boolean registerUser(@RequestBody User user){

        return true;

    }
 
}
