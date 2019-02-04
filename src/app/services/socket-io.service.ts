import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environment/environment.dev';
// import 'rxjs/add/operator/map';
// import { Socket } from 'ng-socket-io';
import * as io from 'socket.io-client';

@Injectable()
export class SocketIoService {
  private socket: SocketIOClient.Socket;
  constructor() {
    this.socket = io(environment.SERVER_IP);
  }

  sendMessage(msg_name: string, msg: Object) {
    this.socket.emit(msg_name, msg);
  }

  getMessage(msg_name: string) {
    return Observable.create(observer => {
      this.socket.on(msg_name, msg => {
        observer.next(msg);
      });
    });
  }
}
