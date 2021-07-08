import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddTeamsComponent } from './components/add-teams/add-teams.component';
import { TeamsComponent } from './components/teams/teams.component';

const routes: Routes = [
  {
    path: 'teams',
    component: TeamsComponent,
  },
  {
    path: '',
    component: AddTeamsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
export const routingComponent = [TeamsComponent];
