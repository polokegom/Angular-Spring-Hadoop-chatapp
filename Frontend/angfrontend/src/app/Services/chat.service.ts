import { Injectable } from '@angular/core';
import { Client, IFrame } from '@stomp/stompjs';
import { Observable, of, ReplaySubject, Subject } from 'rxjs';
import * as SockJS from 'sockjs-client';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  private stompClient: Client;
  private chatSocket:any;
  private connectionSubject: ReplaySubject<IFrame> = new ReplaySubject(1);
  private notificationSubject: Subject<any> = new Subject();
  private url:string = "http://localhost:8091/ws"

  constructor() {

    this.chatSocket = new SockJS(this.url);
    this.stompClient = new Client({
      webSocketFactory: () => this.chatSocket,
      reconnectDelay: 5000,
      debug: (str) => {} 
    });
  }


  public connect(userID: string): Observable<IFrame> {
    this.stompClient.activate();
    this.stompClient.onConnect = (frame) => {
      this.stompClient.publish({
        destination: '/app/subscribe',
        body: JSON.stringify({ userID })
      });

      this.connectionSubject.next(frame);
    };


    return this.connectionSubject.asObservable();
  }


  public notifications(userID: string): Observable<any> {

    this.stompClient.subscribe('/topic/user/' + userID, (res) => {

      this.notificationSubject.next(res.body);
    });

    return this.notificationSubject.asObservable();
  }
  

  public sendMessage(userID: any, message: any): void {
    this.stompClient.publish({
      destination: '/app/sendmessage',
      body: JSON.stringify({ userId: userID, message })
    });
  }


  public endConnection(): void {
    this.stompClient.deactivate();
    this.connectionSubject.complete();
    this.notificationSubject.complete();
  }
}
