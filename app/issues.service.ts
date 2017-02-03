/**
 * Created by appel on 2/2/2017.
 */
import {Injectable} from "@angular/core";
import {Issue} from "./issue";

@Injectable()
export class IssuesService {
  public Issues: Array<Issue> = [{
    body: "body1",
    user: "user1",
    assignee: "ass1",
    title: "title1",
  },
    {
      body: "body2",
      user: "user2",
      assignee: "ass2",
      title: "title2",
    }]
}

