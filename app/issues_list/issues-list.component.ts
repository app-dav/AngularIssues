import { Component, OnInit } from '@angular/core';
import {IssuesService} from "../issues.service";
import {Issue} from "../issue";
import {Observable, Subscription, Subject} from "rxjs";
import "rxjs/add/observable/of";

@Component({
  moduleId: module.id,
  selector: 'issue-list',
  templateUrl: "./issues-list.html",
})


export class IssueListComponent implements OnInit {

  constructor(private issueService: IssuesService) {
  }

  issueTitle: string;
  issues: Array<Issue> = [];

  private done: boolean = false;
  private subsribeFunc = function(issues: Issue[]){
    if (issues.length > 0)
      issues.map((issue: Issue) => this.issues.push(issue))
    else
      this.done = true;
  } .bind(this);

  ngOnInit() {
    this.issueTitle = "Angular Issues (7-Day Feed)";

    for (let x = 0; x < 8; x++) {
      this.issueService.getIssues(x).subscribe(
      this.subsribeFunc
    )
      if (this.done) break;
    }
  }
}
