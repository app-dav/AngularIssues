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
/**
 * Created by appel on 2/2/2017.
 */
const core_1 = require("@angular/core");
const http_1 = require("@angular/http");
require('rxjs/add/operator/catch');
require('rxjs/add/operator/map');
const moment = require("moment");
const issue_1 = require("./issue");
const rxjs_1 = require("rxjs");
require("rxjs/add/observable/of");
let IssuesService = class IssuesService {
    constructor(httpService) {
        this.httpService = httpService;
        this.page = 0;
        this.sevenDayDate = moment().subtract(7, "days").toISOString();
    }
    getUrl(lastpage) {
        return `https://api.github.com/repos/angular/angular/issues?page=${++lastpage}&since=${this.sevenDayDate}`;
    }
    ;
    getIssues(page) {
        return this.httpService.get(this.getUrl(page)).map(this.mapData);
    }
    mapData(resp) {
        let body = resp.json();
        return body ?
            body.map((i) => {
                return new issue_1.Issue(i["body"], i["title"], i["user"]["login"], i["assignee"] ? i["assignee"] : "Not Assigned");
            }) : rxjs_1.Observable.of([]);
    }
    ;
};
IssuesService = __decorate([
    core_1.Injectable(), 
    __metadata('design:paramtypes', [http_1.Http])
], IssuesService);
exports.IssuesService = IssuesService;
//# sourceMappingURL=issues.service.js.map