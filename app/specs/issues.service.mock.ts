import {Issue} from "../issue";
import {Observable, Subscriber} from "rxjs";
/**
 * Created by appel on 2/7/2017.
 */

export class IssuesServiceMock{


  private getIssues(seed: number): Issue{
      return new Issue(`body${seed}`, `title${seed}`, `user${seed}`, `assignee${seed}`);
  }

  getIssuesServiceMock(){
  return {
    getIssues(): Observable<Issue[]>{
      return Observable.create((subscriber:Subscriber<any>) => {
        subscriber.next([this.getIssues(1), this.getIssues(2), this.getIssues(3)]);
        subscriber.next([this.getIssues(4), this.getIssues(5), this.getIssues(6)]);
        subscriber.next([this.getIssues(7), this.getIssues(8), this.getIssues(9)]);
        subscriber.complete();
      })
    },

    getUrl(lastpage: number): string {
      return "";
    },
  }
}
}

