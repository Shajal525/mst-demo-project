import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { PlayerDetailsModel } from './models/playerDetails.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private readonly _url: string = "https://mst-full-stack-dev-test.herokuapp.com/"

  constructor(private httpClient: HttpClient) { }

  public getPlayerData(): Observable<PlayerDetailsModel> {
    return this.httpClient.get<PlayerDetailsModel>(this._url);
  }
}
