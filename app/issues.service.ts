/**
 * Created by appel on 2/2/2017.
 */
import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import moment = require("moment");

import {Issue} from "./issue";
import {Observable, Subject} from "rxjs";

import "rxjs/add/observable/of";

@Injectable()
export class IssuesService {
  constructor(private httpService: Http) {

  }

  private page:number=0;
  private sevenDayDate: string = moment().subtract(7, "days").toISOString();
  private isDone:boolean;

  getUrl(lastpage: number) {
    return `https://api.github.com/repos/angular/angular/issues?page=${++lastpage}&since=${this.sevenDayDate}`;
  };

  getIssues(page: number): Observable<Issue[]> {
      return this.httpService.get(this.getUrl(page)).map(this.mapData);
  }

  private mapData(resp: Response) {
    let body = resp.json();
      return body ?
        body.map((i: string) => {
        return new Issue(i["body"], i["title"], i["user"]["login"], i["assignee"] ? i["assignee"] : "Not Assigned");
    }) : Observable.of<Issue[]>([]);
  };
  }



