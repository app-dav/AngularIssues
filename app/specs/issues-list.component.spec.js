"use strict";
var issues_list_component_1 = require('../issues_list/issues-list.component');
var testing_1 = require('@angular/core/testing');
var platform_browser_1 = require('@angular/platform-browser');
describe('IssueListComponent', function () {
    var de;
    var comp;
    var fixture;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [issues_list_component_1.IssueListComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(issues_list_component_1.IssueListComponent);
        comp = fixture.componentInstance;
        de = fixture.debugElement.query(platform_browser_1.By.css('h1'));
    });
    it('should create component', function () { return expect(comp).toBeDefined(); });
});
//# sourceMappingURL=issues-list.component.spec.js.map