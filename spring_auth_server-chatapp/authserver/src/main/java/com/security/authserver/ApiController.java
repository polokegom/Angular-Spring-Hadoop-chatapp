package com.security.authserver;

import java.nio.charset.StandardCharsets;
import java.util.Date;
import java.util.List;

import javax.crypto.SecretKey;
import org.json.JSONObject;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.Jwts.SIG;
import io.jsonwebtoken.security.Keys;
import io.jsonwebtoken.security.SignatureAlgorithm;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.security.oauth2.resource.OAuth2ResourceServerProperties.Jwt;
import org.springframework.boot.jackson.JsonObjectSerializer;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class ApiController {

    @Autowired
    private UserService userService;
    @Autowired
    private KafkaTopicService kafkaTopicService;
    
    // @Autowired
    // private JavaMailSender javaMail;
    private final String SECRET_KEY_STRING = "f7a98c5e66c74127d28e93ab589fd98d";
    private final SecretKey SECRET_KEY = Keys.hmacShaKeyFor(SECRET_KEY_STRING.getBytes(StandardCharsets.UTF_8));

    @PostMapping("/authenticate")
    public String authenticateUser(@RequestBody String userData) {

        JSONObject objUser = new JSONObject(userData);
        String userEmail = objUser.getString("useremail");
        String userPassword = objUser.getString("userpassword");
        JSONObject response = new JSONObject();

        // Validate if valid user
        User validUser = userService.verifyUserDetails(userEmail, userPassword);

        if (validUser != null) {

            // Build JWT Token using HS256 Algorithm
            long currentTime = System.currentTimeMillis();
            Date today = new Date(currentTime);
            final int hr = 3600000;
            final int day = hr * 24;
            Date expiryDate = new Date(currentTime + day);
            String jwtToken = Jwts.builder().subject(userEmail)
                    .claim("ID", validUser.getID())
         
                    .claim("username", validUser.getUserName())
                    .claim("kafkabrokerIP", validUser.getUserKafkaBrokerIP())
                    .issuedAt(today).expiration(expiryDate).signWith(SECRET_KEY, SIG.HS256)
                    .compact();
            Claims userClaims = Jwts.parser().verifyWith(SECRET_KEY).build().parseSignedClaims(jwtToken).getPayload();

            response.put("success", true);
            response.put("authentication", jwtToken);
            response.put("activation", currentTime);
            response.put("expiration", currentTime + day);

        } else {
            response.put("success", false);
            response.put("message", "Invalid login details");

        }

        return response.toString();
    }

    @PostMapping("/register")
    public ResponseEntity<String> registerUser(@RequestBody User user) {

        String userName = user.getUserName();
        String userEmail = user.getUserEmail();
        System.out.println("-----------------");
        System.out.println(user.toString());
        System.out.println("-----------------");

        JSONObject res = new JSONObject();
        ResponseEntity<String> response;
        res.put("success", false);

        if (userService.verifyUserDetails(userName, userEmail) == null) {
            KafkaTopic kafkaTopic = kafkaTopicService.getKafkaTopic();
            user.setUserKafkaCluster(kafkaTopic.getKafkaCluster());
            user.setUserKafkaBrokerIP(kafkaTopic.getKafkaBrokerIP());

            res.put("success", true);
            userService.saveUser(user);
            response = ResponseEntity.status(HttpStatus.CREATED).body(res.toString());

        } else {
            res.put("message", "The username or email is already taken");
            response = ResponseEntity.status(HttpStatus.NOT_ACCEPTABLE).body(res.toString());
        }

        // Perform user registration logic

        // Send greeting email via SMTP server
        /*
         * SimpleMailMessage email = new SimpleMailMessage();
         * email.setSubject("Welcome to Pengu");
         * email.setFrom("welcome@penguchatapp.com");
         * email.setTo(objUser.getString("useremail"));
         */
        return response;
    }

    @GetMapping("/verify")
    public String authValidation(@RequestHeader("authorisation") String token) {


        Claims userClaims = Jwts.parser().verifyWith(SECRET_KEY).build().parseSignedClaims(token).getPayload();
        String kafkaBroker = (String) userClaims.get("KafkabrokerIP");
        JSONObject response = new JSONObject();
        response.put("success", true);

        return response.toString();

    }

}
