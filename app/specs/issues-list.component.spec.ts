import { IssueListComponent } from '../issues_list/issues-list.component';
import {IssueTemplateComponent} from "../web_controls/issue-template.component";

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import {Issue} from "../issue";

describe('IssueListComponent', function () {
  let de: DebugElement;
  let comp: IssueListComponent;
  let fixture: ComponentFixture<IssueListComponent>;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IssueListComponent, IssueTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IssueListComponent);
    comp = fixture.componentInstance;
  });

  it('should create component', () => expect(comp).toBeDefined() );


});

