"use strict";
/**
 * Created by appel on 2/2/2017.
 */
var testing_1 = require("@angular/core/testing");
var issue_template_component_1 = require("../web_controls/issue-template.component");
describe("Issue template: ", function () {
    var comp;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [issue_template_component_1.IssueTemplateComponent]
        }).compileComponents();
    }));
    beforeEach(function () {
        comp = testing_1.TestBed.createComponent(issue_template_component_1.IssueTemplateComponent).componentInstance;
    });
    it("component should be defined", function () { expect(comp).toBeDefined(); });
});
//# sourceMappingURL=issue-template.component.spec.js.map