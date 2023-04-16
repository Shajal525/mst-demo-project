import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { PlayerDescriptionType } from 'src/app/player-data/player-data.component';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private readonly _url: string = "https://mst-full-stack-dev-test.herokuapp.com/"

  constructor(private httpClient: HttpClient) { }

  public getPlayerData(): Observable<PlayerDescriptionType> {
    return this.httpClient.get<PlayerDescriptionType>(this._url);
  }
}
