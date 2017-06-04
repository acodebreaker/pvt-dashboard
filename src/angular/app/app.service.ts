import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions, Response} from '@angular/http';
import 'rxjs/Rx';
import 'rxjs/add/operator/toPromise';



@Injectable()
export class RallyServices {

    constructor(private http: Http) {
    }

    getRallyData(): Promise<any>{
        return new Promise((resolve, reject)=> {
            this.http.get('mockdata.json').subscribe(result => {
                resolve((<Response>result).json());
            },
            error => {
                console.log(error);
                reject(error);
            }
            );
        });
    }
}

