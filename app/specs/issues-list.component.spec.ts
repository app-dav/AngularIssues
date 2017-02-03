import { IssueListComponent } from '../issues_list/issues-list.component';

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

describe('IssueListComponent', function () {
  let de: DebugElement;
  let comp: IssueListComponent;
  let fixture: ComponentFixture<IssueListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IssueListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IssueListComponent);
    comp = fixture.componentInstance;
    de = fixture.debugElement.query(By.css('h1'));
  });

  it('should create component', () => expect(comp).toBeDefined() );


});
