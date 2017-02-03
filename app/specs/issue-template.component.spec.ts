/**
 * Created by appel on 2/2/2017.
 */
import {async, TestBed, ComponentFixture} from "@angular/core/testing";

import {IssueTemplateComponent} from "../web_controls/issue-template.component";

describe("Issue template: ", () => {

  let comp : IssueTemplateComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [IssueTemplateComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    comp = TestBed.createComponent(IssueTemplateComponent).componentInstance;
  });

  it("component should be defined", () => { expect(comp).toBeDefined()})
});
