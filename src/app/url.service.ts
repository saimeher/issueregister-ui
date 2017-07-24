import { Injectable } from '@angular/core';

@Injectable()
export class UrlService {
  Url: string = 'http://localhost/issue_register/api/';
  //Url: string = 'http://210.16.79.137/raghuerp/dailyreport/server/api/';
  //public LOGIN_API: string = 'http://210.16.79.137/raghuerp/server/api/validLogin';
  public LOGIN_API: string = this.Url + 'loginCheck';
  public GETROLE_API: string = this.Url + 'getRole';
  public GETISSUESLIST: string = this.Url + 'getIssuesList';
  public GETCATEGORIES: string = this.Url + 'getCategories';
  public GETISSUESLISTBYCATEGORY: string = this.Url + 'getIssuesListbyCategory';
  public GETISSUESLISTBYSELECTION: string = this.Url + 'getIssuesListBySelection';
   

  constructor() { }

}
