import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,Validators} from '@angular/forms'
@Component({
  selector: 'app-formbuilder',
  templateUrl: './formbuilder.component.html',
  styleUrls: ['./formbuilder.component.css']
})
export class FormbuilderComponent implements OnInit {
  userForms:FormGroup
  
  constructor(private fb:FormBuilder) { }
  registrationForm=this.fb.group({name:['rahul',Validators.required]})
  ngOnInit(): void {
  }
  onSubmit(){

    console.log("value",this.registrationForm.value)
  }

}
