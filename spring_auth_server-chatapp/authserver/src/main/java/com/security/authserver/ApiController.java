package com.security.authserver;
import java.nio.charset.StandardCharsets;
import java.util.Date;
import java.util.List;

import javax.crypto.SecretKey;
import org.json.JSONObject;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.Jwts.SIG;
import io.jsonwebtoken.security.Keys;
import io.jsonwebtoken.security.SignatureAlgorithm;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.security.oauth2.resource.OAuth2ResourceServerProperties.Jwt;
import org.springframework.boot.jackson.JsonObjectSerializer;
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
    public String authenticateUser(@RequestBody String userData) {
        
        JSONObject objUser = new JSONObject(userData);
        String userEmail = objUser.getString("useremail");
        String userPassword = objUser.getString("password");
        JSONObject response = new JSONObject();

        //Validate if valid user
        User validUser = userService.verifyUserDetails(userEmail, userPassword);

        if (validUser != null) {
            
            //Build JWT Token using HS256 Algorithm        
            long currentTime = System.currentTimeMillis();
            Date today = new Date(currentTime);
            final int hr = 3600000;
            final int day =hr*24;
            Date expiryDate = new Date(currentTime + day);
            String jwtToken = Jwts.builder().subject(userEmail).claim("password", userPassword)
            .issuedAt(today).expiration(expiryDate).signWith(SECRET_KEY, SIG.HS256)
            .compact();           
            
            response.put("success",true);
            response.put("authentication", jwtToken);
            response.put("activation",currentTime);
            response.put("expiration", currentTime + day);

        } else {
            response.put("success", false);
            response.put("message", "Invalid login details");

        } 


        return response.toString();
    }


    @PostMapping("/register")
    public String registerUser(@RequestBody String user) {
        System.out.println("-----------------");
        System.out.println(user.toString());
        System.out.println("-----------------");
        // Perform user registration logic
        
        return "User registered successfully";
    }

 
}
