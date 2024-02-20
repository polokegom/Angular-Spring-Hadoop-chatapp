import { Injectable } from '@angular/core';
import {WebSocketSubject, webSocket} from 'rxjs/webSocket'

@Injectable({
  providedIn: 'root'
})
export class SocketStoreService {
  private socketConnection: WebSocketSubject<any>
  
  constructor() {
    this.socketConnection = webSocket("ws://localhost:8080/tom12344");
   }

  public connect(): void {

    this.socketConnection.subscribe((message)=> console.log("Message: " + message)
    /*,(error)=> console.log("Error detected"),
    ()=> console.log("web socket closed")*/
    );

    
  }

  public endConnection(): void{
    if (this.socketConnection)
    this.socketConnection.unsubscribe()
    
  }

  public sendMessage(data: any): void {
      this.socketConnection.next(data)
  }

}
