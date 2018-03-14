import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-practice2',
  templateUrl: './practice2.component.html',
  styleUrls: ['./practice2.component.css']
})
export class Practice2Component implements OnInit {

  @Output() changeGrade: EventEmitter<number> = new EventEmitter<number>();
  grade = 0;

  constructor() { }

  ngOnInit() {
  }
}
