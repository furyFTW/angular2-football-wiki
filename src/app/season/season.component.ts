import { Component, OnInit } from '@angular/core';
import { FootbalService } from '../football-api/footbal.service';
import {Season} from '../football-api/season';
@Component({
  selector: 'season',
  templateUrl: './season.component.html',
  styleUrls: ['./season.component.css'],
  providers: [FootbalService]
})
export class SeasonComponent implements OnInit {

  constructor(private FootbalService: FootbalService) { }

  private football;
  ngOnInit() {
    this.FootbalService.getSeasons(1).subscribe(season => this.football = season)
  }

}
