package com.security.authserver;
import java.nio.charset.StandardCharsets;
import java.util.Date;
import java.util.List;

import javax.crypto.SecretKey;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.Jwts.SIG;
import io.jsonwebtoken.security.Keys;
import io.jsonwebtoken.security.SignatureAlgorithm;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.security.oauth2.resource.OAuth2ResourceServerProperties.Jwt;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;


@RestController
public class ApiController {
    
    @Autowired
    private UserService userService;
    private final String SECRET_KEY_STRING = "f7a98c5e66c74127d28e93ab589fd98d";
    private final SecretKey SECRET_KEY = Keys.hmacShaKeyFor(SECRET_KEY_STRING.getBytes(StandardCharsets.UTF_8));
    @PostMapping("/authenticate") 
    public List<User> authenticateUser(@RequestBody User user) {
        long currentTime = System.currentTimeMillis();
        Date today = new Date(currentTime);
        Date expiryDate = new Date(currentTime + 1000*60*60*60);
        String jwtToken = Jwts.builder().subject(user.getUserEmail()).claim("password", user.getUserPassword())
        .issuedAt(today).expiration(expiryDate).signWith(SECRET_KEY, SIG.HS256)
        .compact();   
        userService.verifyUserDetails(user);


        List<User> listOfUsers = userService.getAllUsers();

        return userService.getAllUsers();
    }

    public Boolean registerUser(@RequestBody User user){

        return true;

    }
 
}
