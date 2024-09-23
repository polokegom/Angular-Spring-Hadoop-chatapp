package com.chatapp.springchatapp.Models;


/*
* JavaBean class that stores the users details
*
* */
public class User {

    private String userID;
    private String userName;
    private String userEmail;
    private String photoURL;


    public String getUserID() {
        return userID;
    }

    public String getUserName() {
        return userName;
    }

    public String getUserEmail() {

        return userEmail;
    }

    public String getPhotoURL() {
        return photoURL;
    }

    public void setUserID(String userID) {
        this.userID = userID;
    }

    public void setUserName(String userName){
        this.userName = userName;
    }

    public void setUserEmail(String userEmail) {

        this.userEmail = userEmail;
    }

    public void setPhotoURL(String photoURL) {
        this.photoURL = photoURL;
    }

}
