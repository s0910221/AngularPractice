import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-practice5',
  templateUrl: './practice5.component.html',
  styleUrls: ['./practice5.component.css']
})
export class Practice5Component implements OnInit {

  tag: string;
  constructor() { }

  ngOnInit() {
  }

  vvv(e) {
    console.log(e);
  }
}
