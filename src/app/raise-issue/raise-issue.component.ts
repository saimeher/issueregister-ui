import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormsModule, Form, FormGroup, FormBuilder, Validators, AbstractControl, ValidatorFn } from '@angular/forms';
import { ApiService} from '../api.service';
@Component({
  selector: 'app-raise-issue',
  templateUrl: './raise-issue.component.html',
  styleUrls: ['./raise-issue.component.css']
})
export class RaiseIssueComponent implements OnInit {

  constructor(public api:ApiService, public fb:FormBuilder) { }
  issues_form:FormGroup;
  ngOnInit() {
    this.issues_form= this.fb.group({
      seluserid:[''],
      from_date:[''],
      to_date:[''],
      selstatus:[''],
      selstatus1:[]
    });
   // this.getIssuesList();
   // this.getCategories();
  }

}
