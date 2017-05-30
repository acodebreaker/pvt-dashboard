import { Component, OnInit } from '@angular/core';
import {RallyServices} from './app.service';
import {Team} from "./team";

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls : ['./app.component.css'],
  providers: [RallyServices]
})
export class AppComponent implements OnInit{

  data: Team[];
  name: string;

  constructor(private rallyServices: RallyServices) { }

  ngOnInit(): void {
    this.name = 'Dheeraj Kumar';
    this.rallyServices.getRallyData().then(data => this.data =data);
  }
}
