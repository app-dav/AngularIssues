"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var issues_service_1 = require("../issues.service");
var IssueListComponent = (function () {
    function IssueListComponent(issueService) {
        this.issueService = issueService;
        this.issues = [];
    }
    IssueListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.issueService.Issues.subscribe(function (newIssue) { return _this.issues = newIssue; });
        this.issueTitle = "Angular Issues (7-Day Feed)";
    };
    IssueListComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'issue-list',
            templateUrl: "./issues-list.html",
        }), 
        __metadata('design:paramtypes', [issues_service_1.IssuesService])
    ], IssueListComponent);
    return IssueListComponent;
}());
exports.IssueListComponent = IssueListComponent;
//# sourceMappingURL=issues-list.component.js.map