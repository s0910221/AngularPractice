import { BmiService } from './../bmi.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-practice7',
  templateUrl: './practice7.component.html',
  styleUrls: ['./practice7.component.css']
})
export class Practice7Component implements OnInit {

  constructor(private bmiService: BmiService) { }

  ngOnInit() {
  }

  calc() {
    const bmi = this.bmiService.calBMI(180, 60);
    console.log(bmi);
  }

}
