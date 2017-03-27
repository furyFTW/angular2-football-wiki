import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule,JsonpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { SeasonComponent } from './season/season.component';
import { TeamComponent } from './team/team.component';
import { PlayersComponent } from './players/players.component';
import { CompetitionComponent } from './competition/competition.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    SeasonComponent,
    TeamComponent,
    PlayersComponent,
    CompetitionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    AppRoutingModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
