package com.security.authserver;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

import io.jsonwebtoken.ExpiredJwtException;
import io.jsonwebtoken.MalformedJwtException;
import io.jsonwebtoken.security.SignatureException;

@ControllerAdvice
public class Exceptions {

    @ExceptionHandler(ExpiredJwtException.class)
    public ResponseEntity<String> handleJwtExpirationError(Exception e) {



        return null;
        
    }

    @ExceptionHandler({MalformedJwtException.class, SignatureException.class})
    public ResponseEntity<String> handleFalseJwtToken(Exception e) {

        return null;
    }
    
}
