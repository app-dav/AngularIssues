import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpModule, JsonpModule} from "@angular/http";

import { IssueListComponent }  from './issues_list/issues-list.component';
import {IssueTemplateComponent} from "./web_controls/issue-template.component";
import {IssuesService} from "./issues.service";



@NgModule({
  imports:      [ BrowserModule , HttpModule, JsonpModule],
  declarations: [ IssueListComponent, IssueTemplateComponent],
  bootstrap:    [ IssueListComponent],
  providers: [IssuesService]
})
export class AppModule { }
