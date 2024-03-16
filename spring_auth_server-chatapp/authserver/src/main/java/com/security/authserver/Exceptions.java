package com.security.authserver;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

import io.jsonwebtoken.ExpiredJwtException;
import io.jsonwebtoken.MalformedJwtException;
import io.jsonwebtoken.security.SignatureException;
import net.minidev.json.JSONObject;

@ControllerAdvice
public class Exceptions {

    @ExceptionHandler(ExpiredJwtException.class)
    public ResponseEntity<String> handleJwtExpirationError(Exception e) {

        JSONObject response = new JSONObject();
        response.put("success",false);
        response.put("error",2);
        response.put("message","Your session has expired");

        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(response.toString());
        
    }

    @ExceptionHandler({MalformedJwtException.class, SignatureException.class})
    public ResponseEntity<String> handleFalseJwtToken(Exception e) {


        JSONObject response = new JSONObject();
        response.put("success",false);
        response.put("message","");
        return response;
    }
    
}
