import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { IssueListComponent }  from './issues_list/issues-list.component';
import {IssueTemplateComponent} from "./web_controls/issue-template.component";



@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ IssueListComponent, IssueTemplateComponent],
  bootstrap:    [ IssueListComponent]
})
export class AppModule { }
