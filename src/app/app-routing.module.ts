import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SeasonComponent } from 'app/season/season.component'
const routes: Routes = [
    {
        path: '',
        children: []
    },
    {
        path: 'season',
        component: SeasonComponent
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
