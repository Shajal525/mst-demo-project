import { Injectable } from '@angular/core';
import { PlayerDataModule } from './player-data.module';
import { map } from 'rxjs/operators';
import { DataService } from '../shared/services/data-service.service';

@Injectable({
  providedIn: PlayerDataModule
})
export class PlayerDataService {

  constructor(private dataService: DataService) { }

  public getPlayerData(): any {
    return this.dataService.getPlayerData().pipe(
      map((result: any) => result.data),
    );
  }
}
