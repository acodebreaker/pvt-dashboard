import { Component , OnInit } from '@angular/core';

@Component({
    selector: 'progress-bar',
    templateUrl: './progressbar.html',
    styleUrls : ['./progressbar.css'],
})
export class ProgressBarComponent  {
    story = {
        status: ''
    };

    constructor(){
    }

    changeStatus(value : string){
        this.story.status = value;
    }
}