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
const core_1 = require('@angular/core');
const issues_service_1 = require("../issues.service");
require("rxjs/add/observable/of");
let IssueListComponent = class IssueListComponent {
    constructor(issueService) {
        this.issueService = issueService;
        //issues: Observable<Issue[]> = Observable.of<Issue[]>([]);
        this.issues = [];
        // private page = new Subject<number>();
        this.done = false;
        this.subsribeFunc = function (issues) {
            if (issues.length > 0)
                issues.map((issue) => this.issues.push(issue));
            else
                this.done = true;
        }.bind(this);
    }
    ngOnInit() {
        this.issueTitle = "Angular Issues (7-Day Feed)";
        for (let x = 0; x < 8; x++) {
            this.issueService.getIssues(x).subscribe(this.subsribeFunc);
            if (this.done)
                break;
        }
    }
};
IssueListComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'issue-list',
        templateUrl: "./issues-list.html",
    }), 
    __metadata('design:paramtypes', [issues_service_1.IssuesService])
], IssueListComponent);
exports.IssueListComponent = IssueListComponent;
//# sourceMappingURL=issues-list.component.js.map