import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { FootbalService } from '../football-api/footbal.service';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css'],
  providers: [FootbalService]
})
export class TeamComponent implements OnInit {
  private id;
  private teams;
  constructor(private route: ActivatedRoute, private FootbalService: FootbalService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = +params['id']; // (+) converts string 'id' to a number
      this.FootbalService.getTeam(this.id).subscribe(data => {
        this.teams = data.teams;
      })
    });
  }

}
