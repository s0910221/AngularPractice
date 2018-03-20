import { Component, OnInit } from '@angular/core';
import { BmiService } from '../bmi.service';

@Component({
  selector: 'app-practice1',
  templateUrl: './practice1.component.html',
  styleUrls: ['./practice1.component.css']
})
export class Practice1Component implements OnInit {

  twMoney = 0;
  radius = 0;

  constructor(private bmiService: BmiService) { }

  ngOnInit() {
  }

}
