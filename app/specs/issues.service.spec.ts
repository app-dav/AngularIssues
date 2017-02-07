/**
 * Created by appel on 2/2/2017.
 */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import {IssuesService} from "../issues.service";
import {Http} from "@angular/http";

describe("Issue Service: ", () => {

  let issueService : IssuesService = new IssuesService(null);

  describe("GetUrl" , () => {
    it("Should return last page +1", () => { expect(issueService.getUrl(2)).toContain("page=3")})
  })
})
