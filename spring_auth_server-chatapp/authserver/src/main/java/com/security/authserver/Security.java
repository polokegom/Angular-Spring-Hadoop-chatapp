package com.security.authserver;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfiguration;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;



@Configuration
@EnableWebSecurity
public class Security   /*extends WebSecurityConfiguration*/ {

 /*   @Override
    protected void configure(HttpSecurity http) throws Exception {

        http.csrf().disable().authorizeRequests().antMatchers("authenticate").permitAll()
        .anyRequest().authenticated(); 
    }
*/
    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        //Link to new code for deprecated Security function Spring 6.2.2
       //https://docs.spring.io/spring-security/reference/5.8/migration/servlet/config.html
        http.csrf(csrf -> csrf.disable()).authorizeHttpRequests((authz) -> authz.requestMatchers("authenticate").permitAll()
        .anyRequest().authenticated()); 
        return http.build();      
    }
    
}
