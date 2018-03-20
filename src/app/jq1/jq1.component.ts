import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jq1',
  templateUrl: './jq1.component.html',
  styleUrls: ['./jq1.component.css']
})
export class Jq1Component implements OnInit {

  constructor() { }

  ngOnInit() {
    $(() => {
      console.log('JQ Start');
    });
  }

}
