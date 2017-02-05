/**
 * Created by appel on 2/2/2017.
 */
"use strict";
var Issue = (function () {
    function Issue(body, title, user, assignee) {
        this.body = body;
        this.title = title;
        this.user = user;
        this.assignee = assignee;
    }
    return Issue;
}());
exports.Issue = Issue;
//# sourceMappingURL=issue.js.map