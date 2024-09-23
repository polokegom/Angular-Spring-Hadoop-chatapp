package com.chatapp.springchatapp.Models;

import java.util.Date;

/**
 * JavaBean class that stores the chat messages
 *
 */
public class ChatMessage {

   private String userID;
   private String userText;
   private Date dateTimeCreated;
   private boolean hasBeenEdited;

   public String getUserID() {
      return userID;
   }

   public String getUserText()   {
      return userText;
   }

   public Date getDateTimeCreated() {
      return dateTimeCreated;

   }

   public boolean getHasBeenEdited() {

      return hasBeenEdited;
   }


   public void setUserID(String userID) {
      this.userID = userID;
   }

   public void setUserText(String userText)   {
      this.userText = userText;
   }

   public void setDateTimeCreated(Date dateTimeCreated) {
      this.dateTimeCreated = dateTimeCreated;

   }

   public void setHasBeenEdited(boolean hasBeenEdited) {

      this.hasBeenEdited = hasBeenEdited;
   }





}
