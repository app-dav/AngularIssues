/**
 * Created by appel on 2/2/2017.
 */
import {Injectable} from "@angular/core";
import {Issue} from "./issue";

@Injectable()
export class IssuesService{
  public Issues: Array<Issue>;
}

