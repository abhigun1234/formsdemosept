import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {
  myname="abhishek"
  constructor() { }

  ngOnInit() {
  }
 public registerUser(value :any)
 {
  console.log(value)
  //alert('hello')
 }
}
