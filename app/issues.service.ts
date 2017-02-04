/**
 * Created by appel on 2/2/2017.
 */
import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import moment = require("moment");

import {Issue} from "./issue";
import {Observable} from "rxjs";

@Injectable()
export class IssuesService {
  constructor(private httpService: Http) {}

  private url: string = `https://api.github.com/repos/angular/angular/issues?since=${moment().subtract(7, "days").toISOString()}`;
  public Issues: Observable<Issue[]> = this.httpService.get(this.url).map(this.mapData);

  private mapData(resp: Response) {
    let body = resp.json();
    return body.map((i: string) => new Issue(i["body"], i["user"]["login"], i["assignee"], i["title"]));
  }

}

