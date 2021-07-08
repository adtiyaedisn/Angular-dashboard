import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routingComponent } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { UploadComponent } from './components/upload/upload.component';
import { InfoComponent } from './components/info/info.component';
import { EventsComponent } from './components/events/events.component';
import { ContentsComponent } from './components/contents/contents.component';
import { TeamModalComponent } from './components/team-modal/team-modal.component';
import { TeamListComponent } from './components/team-list/team-list.component';
import { TeamsComponent } from './components/teams/teams.component';
import { AddTeamsComponent } from './components/add-teams/add-teams.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UploadComponent,
    InfoComponent,
    EventsComponent,
    ContentsComponent,
    TeamModalComponent,
    TeamListComponent,
    TeamsComponent,
    routingComponent,
    AddTeamsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
