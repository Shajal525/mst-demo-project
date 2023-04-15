import { Component, OnInit } from '@angular/core';
import { PlayerDataService } from './player-data.service';

@Component({
  selector: 'app-player-data',
  templateUrl: './player-data.component.html',
  styleUrls: ['./player-data.component.css']
})
export class PlayerDataComponent implements OnInit {
  public playerData: any[] = [];
  public displayedColumns: string[] = ["Match", "First", "Last", "Nationality"];

  constructor(private playerDataService: PlayerDataService) {}

  ngOnInit(): void {
    this.playerDataService.getPlayerData().subscribe(data => {
      this.playerData = data;
    });
  }

}
