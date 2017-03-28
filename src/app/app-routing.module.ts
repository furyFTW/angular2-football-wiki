import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SeasonComponent } from 'app/season/season.component'
import { TeamComponent } from 'app/team/team.component';
import { PlayersComponent } from 'app/players/players.component';
import { CompetitionComponent } from 'app/competition/competition.component';
const routes: Routes = [
    {
        path: '',
        redirectTo: '/season',
        pathMatch: 'full'
    },
    {
        path: 'season',
        component: SeasonComponent
    },
    {
        path: 'competition/:id',
        component: CompetitionComponent
    },
    {
        path: 'team/:id',
        component: TeamComponent
    },
    {
        path: 'players/:id',
        component: PlayersComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
