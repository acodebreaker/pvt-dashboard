
import { Injectable } from '@angular/core';
import { team } from './mockdata';
import {Team} from "./team";



@Injectable()
export class RallyServices {
    getRallyData():Promise<Team[]>{
        return Promise.resolve(team);
    }
}