package com.security.authserver;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ApiController {
    
    @Autowired
    private UserService userService;

    @GetMapping("/authenticate") 
    public List<User> authenticateUser() {
        List<User> listOfUsers = userService.getAllUsers();

        return userService.getAllUsers();
    }

}
