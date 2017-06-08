import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {RallyServices} from './app.service';
import {Team} from "./team";
import {Story} from "./story";

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls : ['./app.component.css'],
  providers: [RallyServices]
})

export class AppComponent implements OnInit {
  data: any;
  teams: Map<string, Team>;

  constructor(private rallyServices: RallyServices, private changeDetectorRef: ChangeDetectorRef) {
  }

  ngOnInit(): void {
   this.teams= this.createTeamMap();
   this.getRallyData();
   }

  private getRallyData(): void {
    this.rallyServices.getRallyData().then((result) => {
          this.data = result;
          this.translateRallyData();
        },
        (error) => {
          console.error(JSON.stringify(error.status));
        });

  }

  private translateRallyData(): void {
    var storiesJson = this.data.QueryResult.Results;

    for (let storyJson of storiesJson) {
      var story = new Story();
      story.id = storyJson.FormattedID;
      story.description = storyJson.Name;
      story.status = storyJson.ScheduleState;
      if (storyJson.Project.Name) {
        this.teams.get(storyJson.Project.Name).story.push(story);
      }
    }
    this.changeDetectorRef.detectChanges();
  }

  private createTeamMap(): Map<string, Team> {
    var teams = new Map<string, Team>();
    teams.set('Enigma', {name: 'Enigma', story: []});
    teams.set('Eureka', {name: 'Eureka', story: []});
    teams.set('Orion', {name: 'Orion', story: []});
    teams.set('Sigma', {name: 'Sigma', story: []});
    teams.set('Delta', {name: 'Delta', story: []});
    teams.set('Odin', {name: 'Odin', story: []});
    return teams;
  }
}