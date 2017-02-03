/**
 * Created by appel on 2/2/2017.
 */
import {Component, Input} from "@angular/core";
import {Issue} from "../issue";

@Component({
  moduleId: module.id,
  selector: "issue",
  templateUrl: "issue-list.template.html"
})

export class IssueTemplateComponent{
  @Input()
  issue: Issue;
}
