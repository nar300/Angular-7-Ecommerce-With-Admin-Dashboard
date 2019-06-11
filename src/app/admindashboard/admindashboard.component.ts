import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admindashboard',
  templateUrl: './admindashboard.component.html',
  styleUrls: ['./admindashboard.component.css']
})
export class AdmindashboardComponent implements OnInit {

  selected =1;

  constructor() { }

  ngOnInit() {
  }

  onSubmit(event){
    console.log(event)
    this.selected =event
  }
}
