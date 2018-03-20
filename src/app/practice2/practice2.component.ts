import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { BmiService } from '../bmi.service';

@Component({
  selector: 'app-practice2',
  templateUrl: './practice2.component.html',
  styleUrls: ['./practice2.component.css']
})
export class Practice2Component implements OnInit {

  @Output() changeGrade: EventEmitter<number> = new EventEmitter<number>();
  grade = 0;

  constructor(private bmiService: BmiService) { }

  ngOnInit() {
    this.bmiService.pub_temp1 = 99;
  }
}
