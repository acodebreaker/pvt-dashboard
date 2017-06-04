import { Component, OnInit } from '@angular/core';
import {RallyServices} from './app.service';
import {Team} from "./team";
import { Story } from "./story";

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls : ['./app.component.css'],
  providers: [RallyServices]
})
export class AppComponent implements OnInit{

  data: any;
  teams: Team[] = [
    {name: "Odin", story: []},
    {name: "Sigma", story: []},
    {name: "Eureka", story: []}
  ];

  constructor(private rallyServices: RallyServices) { }

  ngOnInit(): void {
    this.getRallyData();
  }

  private getRallyData():void {
    this.rallyServices.getRallyData().then((result) => {
        this.data = result;
          this.translateRallyData();
      },
      (error) => {
        console.error(JSON.stringify(error.status));
      });

  }

  private translateRallyData():void {
      var storiesJson = this.data.QueryResult.Results;
      var story = new Story();
      for(let storyJson of storiesJson) {
        story.id = storyJson.FormattedID;
        story.description = storyJson.Name;
        story.status = storyJson.scheduleState;
        console.log(storyJson.Project.Name);
        switch (storyJson.Project.Name) {
          case 'Odin' :
            this.teams[0].story.push(story);
            break;
          case 'Sigma' :
            this.teams[1].story.push(story);
            break;
          case 'Eureka' :
            this.teams[2].story.push(story);
            break;
          default :
            console.log("not valid story");
            break;
        }
    }

  }
}