import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { FootbalService } from '../football-api/footbal.service';
@Component({
  selector: 'app-competition',
  templateUrl: './competition.component.html',
  styleUrls: ['./competition.component.css'],
  providers: [FootbalService]
})
export class CompetitionComponent implements OnInit {
  private id;
  private competitions;
  constructor(private route: ActivatedRoute, private FootbalService: FootbalService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = +params['id'];
      this.FootbalService.getTeam(this.id).subscribe(data => {
        data.teams.forEach(cur => {
          cur.id = this.getIdbyLink(cur._links.self.href);
        });
        this.competitions = data.teams;
      })
    })
  }

  getIdbyLink(link) {
    return this.FootbalService.getId(link);

  }

}
