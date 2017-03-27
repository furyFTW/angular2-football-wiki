import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { FootbalService } from '../football-api/footbal.service';
@Component({
  selector: 'app-competition',
  templateUrl: './competition.component.html',
  styleUrls: ['./competition.component.css'],
  providers : [FootbalService]
})
export class CompetitionComponent implements OnInit {
  private id;
  private competitions;
  constructor(private route: ActivatedRoute, private FootbalService: FootbalService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = +params['id']; // (+) converts string 'id' to a number
      console.log( this.id)
      this.FootbalService.getTeam(this.id).subscribe(data => {
        this.getIdbyLink(data._links)
        this.competitions = data.teams;
      })
    })
  }

  getIdbyLink(link){
   this.id =  this.FootbalService.getId(link);
  }

}
