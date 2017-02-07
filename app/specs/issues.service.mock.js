"use strict";
const issue_1 = require("../issue");
const rxjs_1 = require("rxjs");
/**
 * Created by appel on 2/7/2017.
 */
class IssuesServiceMock {
    getIssues(seed) {
        return new issue_1.Issue(`body${seed}`, `title${seed}`, `user${seed}`, `assignee${seed}`);
    }
    getIssuesServiceMock() {
        return {
            getIssues() {
                return rxjs_1.Observable.create((subscriber) => {
                    subscriber.next([this.getIssues(1), this.getIssues(2), this.getIssues(3)]);
                    subscriber.next([this.getIssues(4), this.getIssues(5), this.getIssues(6)]);
                    subscriber.next([this.getIssues(7), this.getIssues(8), this.getIssues(9)]);
                    subscriber.complete();
                });
            },
            getUrl(lastpage) {
                return "";
            },
        };
    }
}
exports.IssuesServiceMock = IssuesServiceMock;
//# sourceMappingURL=issues.service.mock.js.map