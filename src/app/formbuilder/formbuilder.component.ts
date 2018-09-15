import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,Validators} from '@angular/forms'
@Component({
  selector: 'app-formbuilder',
  templateUrl: './formbuilder.component.html',
  styleUrls: ['./formbuilder.component.css']
})
export class FormbuilderComponent implements OnInit {
  userForms:FormGroup
  
  /*userForm= new FormGroup({name:new FormControl("abhishek",Validators.required),
  email:new FormControl(),address:new FormGroup({city:new FormControl(),
    postelCode:new FormControl()
  ,street:new FormControl()
  })})*/
  constructor(private _formBuilder:FormBuilder) { 

  }

  ngOnInit() {
    this._formBuilder.group({name:['abhishek',,[Validators.required]]})
  }

}
