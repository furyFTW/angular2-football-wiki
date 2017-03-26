import { Component } from '@angular/core';
import { FootbalService } from './football-api/footbal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [FootbalService]
})
export class AppComponent {
  public football ;
  constructor(private FootbalService: FootbalService){
     this.FootbalService.getSeasons(1).subscribe(data => this.football = data)
  }

  title = 'app works!';
}
