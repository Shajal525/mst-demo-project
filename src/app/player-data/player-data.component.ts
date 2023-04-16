import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { PlayerDataService } from './player-data.service';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-player-data',
  templateUrl: './player-data.component.html',
})
export class PlayerDataComponent implements OnInit, OnDestroy {
  public playerData = new MatTableDataSource<PlayerDescriptionType>([]);
  public displayedColumns: string[] = [];
  public playerSubscription: Subscription;
  @ViewChild("playerTable") table: MatTable<PlayerDescriptionType>
  
  constructor(private playerDataService: PlayerDataService) {}

  ngOnInit(): void {
    this.playerSubscription = this.playerDataService.getPlayerData().subscribe((data: PlayerDescriptionType) => {
      if (data) {
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

export interface PlayerDescriptionType {
  Amature?: number,
  CalculatedRankInteger?: number,
  Eastern?: string,
  First?: string,
  Handicap?: number,
  Hole1STP?: number,
  Hole1Strokes?: number,
  Hole2STP?: number,
  Hole2Strokes?: number,
  Hole3STP?: number,
  Hole3Strokes?: number,
  Hole4STP?: number,
  Hole4Strokes?: number,
  Hole5STP?: number,
  Hole5Strokes?: number,
  Hole6STP?: number,
  Hole6Strokes?: number,
  Hole7STP?: number,
  Hole7Strokes?: number,
  Hole8STP?: number,
  Hole8Strokes?: number,
  Hole9STP?: number,
  Hole9Strokes?: number,
  Hole10STP?: number,
  Hole10Strokes?: number,
  Hole11STP?: number,
  Hole11Strokes?: number,
  Hole12STP?: number,
  Hole12Strokes?: number,
  Hole13STP?: number,
  Hole13Strokes?: number,
  Hole14STP?: number,
  Hole14Strokes?: number,
  Hole15STP?: number,
  Hole15Strokes?: number,
  Hole16STP?: number,
  Hole16Strokes?: number,
  Hole17STP?: number,
  Hole17Strokes?: number,
  Hole18STP?: number,
  Hole18Strokes?: number,
  InSTP?: number,
  InStrokes?: number,
  Last?: string,
  MSTID?: number,
  Match?: number,
  Nationality?: string,
  OutSTP?: number,
  OutStrokes?: number,
  SOD?: string,
  Score?: number,
  Sex?: string,
  SortPriority?: string,
  TVName?: string,
  Today?: number,
  TotalSTP?: number,
  TotalStrokes?: number,
  UniquePosition?: number,
  course?: number,
  holesPlayed?: number,
  isTeam?: number,
  lastUpdated?: string,
  leaderboardID?: number,
  matchID?: number,
  orderInMatch?: number,
  position?: number,
  round?: number,
  status?: number,
  teeStart?: number,
  teeTime?: string,
  tournamentID?: number,
}
