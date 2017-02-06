"use strict";
/**
 * Created by appel on 2/2/2017.
 */
const testing_1 = require("@angular/core/testing");
const issue_template_component_1 = require("../web_controls/issue-template.component");
describe("Issue template: ", () => {
    let comp;
    beforeEach(testing_1.async(() => {
        testing_1.TestBed.configureTestingModule({
            declarations: [issue_template_component_1.IssueTemplateComponent]
        }).compileComponents();
    }));
    beforeEach(() => {
        comp = testing_1.TestBed.createComponent(issue_template_component_1.IssueTemplateComponent).componentInstance;
    });
    it("component should be defined", () => { expect(comp).toBeDefined(); });
});
//# sourceMappingURL=issue-template.component.spec.js.map