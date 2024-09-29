import { Injectable } from '@angular/core';
import { Client } from '@stomp/stompjs';
import { Observable, of } from 'rxjs';
import * as SockJS from 'sockjs-client';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  private stompClient: Client;
  private chatSocket:any;

  constructor() { 

    this.chatSocket = new SockJS("http://localhost:8091/ws")
    
    this.stompClient = new Client({
        webSocketFactory: ()=> this.chatSocket,
        reconnectDelay:5000,
        debug: (str)=>{}

    });

    this.stompClient.activate();

    this.stompClient.onConnect = (frame)=> {
      
    }
  }

  public connect(): void {

  }

  public notifications(): Observable<any>{
    
    return of();
  }

  public sendMessage(userID: any, message: any): void {


  }


  public endConnection(): void{

  }

}
