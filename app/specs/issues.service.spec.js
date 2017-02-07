"use strict";
const issues_service_1 = require("../issues.service");
describe("Issue Service: ", () => {
    let issueService = new issues_service_1.IssuesService(null);
    describe("GetUrl", () => {
        it("Should return last page +1", () => { expect(issueService.getUrl(2)).toContain("page=3"); });
    });
});
//# sourceMappingURL=issues.service.spec.js.map