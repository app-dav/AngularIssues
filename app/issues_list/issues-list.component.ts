import { Component, OnInit } from '@angular/core';
import {IssuesService} from "../issues.service";
import {Issue} from "../issue";

@Component({
  moduleId: module.id,
  selector: 'issue-list',
  templateUrl: "./issues-list.html",
})


export class IssueListComponent implements OnInit{

  constructor(private issueService: IssuesService ) {

  }

  issueTitle: string;
  issues: Array<Issue> = [];

  ngOnInit(){
    this.issueService.Issues.subscribe(newIssue => this.issues = newIssue);

    this.issueTitle = "Angular Issues (7-Day Feed)";
  }


}
