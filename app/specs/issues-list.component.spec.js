"use strict";
const issues_list_component_1 = require('../issues_list/issues-list.component');
const issue_template_component_1 = require("../web_controls/issue-template.component");
const testing_1 = require('@angular/core/testing');
const issues_service_1 = require("../issues.service");
const issues_service_mock_1 = require("./issues.service.mock");
describe('IssueListComponent', function () {
    let de;
    let comp;
    let fixture;
    const service = new issues_service_mock_1.IssuesServiceMock();
    beforeEach(testing_1.async(() => {
        testing_1.TestBed.configureTestingModule({
            declarations: [issues_list_component_1.IssueListComponent, issue_template_component_1.IssueTemplateComponent],
            providers: [{ provide: issues_service_1.IssuesService, useVaue: service.getIssuesServiceMock() }]
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