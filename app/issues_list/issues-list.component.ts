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


export class IssueListComponent implements OnInit{

  constructor(private issueService: IssuesService ) {}

  issueTitle: string;
  //issues: Observable<Issue[]> = Observable.of<Issue[]>([]);
  issues: Array<Issue> = [];
 // private page = new Subject<number>();

    ngOnInit() {
      this.issueTitle = "Angular Issues (7-Day Feed)";

      var done: boolean = false;
      for(let x=0;x<10;x++)
      {
        this.issueService.getIssues(x).subscribe(
          (issues: Issue[]) => {
            if (issues.length > 0)
              issues.map((issue: Issue) => this.issues.push(issue))
              else
                done = true;
            }
          )
        if(done) break;
      }

    }

/*


 */


}
