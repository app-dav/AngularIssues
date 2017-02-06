"use strict";
const issues_list_component_1 = require('../issues_list/issues-list.component');
const issue_template_component_1 = require("../web_controls/issue-template.component");
const testing_1 = require('@angular/core/testing');
describe('IssueListComponent', function () {
    let de;
    let comp;
    let fixture;
    beforeEach(testing_1.async(() => {
        testing_1.TestBed.configureTestingModule({
            declarations: [issues_list_component_1.IssueListComponent, issue_template_component_1.IssueTemplateComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = testing_1.TestBed.createComponent(issues_list_component_1.IssueListComponent);
        comp = fixture.componentInstance;
    });
    it('should create component', () => expect(comp).toBeDefined());
});
//# sourceMappingURL=issues-list.component.spec.js.map