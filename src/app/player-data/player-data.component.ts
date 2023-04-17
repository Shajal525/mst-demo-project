import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { PlayerDataService } from './player-data.service';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { PlayerDetailsModel } from '../shared/models/playerDetails.model';
import * as lodash from 'lodash-es';

@Component({
  selector: 'app-player-data',
  templateUrl: './player-data.component.html',
})
export class PlayerDataComponent implements OnInit, OnDestroy {
  public playerData = new MatTableDataSource<PlayerDetailsModel>([]);
  public displayedColumns: string[] = [];
  public playerSubscription: Subscription;
  @ViewChild("playerTable") table: MatTable<PlayerDetailsModel>

  constructor(private playerDataService: PlayerDataService) {}

  ngOnInit(): void {
    this.playerSubscription = this.playerDataService.getPlayerData().subscribe((data: PlayerDetailsModel) => {
      if (data != null && !lodash.isEmpty(data)) {
        if (this.displayedColumns.length == 0) {
          this.displayedColumns = Object.keys(data);
        }
        this.playerData.data.push({...data});
        this.table.renderRows();
      }
    });
  }

  ngOnDestroy(): void {
    this.playerSubscription?.unsubscribe();
  }
}
