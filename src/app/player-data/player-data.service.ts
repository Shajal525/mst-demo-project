import { Injectable } from '@angular/core';
import { PlayerDataModule } from './player-data.module';
import { Observable } from 'rxjs';
import { io, Socket } from 'socket.io-client';
import { PlayerDetailsModel } from '../shared/services/models/playerDetails.model';

@Injectable({
  providedIn: PlayerDataModule
})
export class PlayerDataService {
  private socket: Socket;

  constructor() {
    this.socket = io('https://mst-full-stack-dev-test.herokuapp.com/');
  }

  public getPlayerData(): Observable<PlayerDetailsModel> {
    return new Observable(observer => {
      this.socket.on('data-update', response => {
        observer.next(response);
      });
    });
  }
}
