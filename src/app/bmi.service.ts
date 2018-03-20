import { Injectable } from '@angular/core';

@Injectable()
export class BmiService {
  pub_temp1 = 2;
  constructor() { }

  calBMI(h: number, w: number): number {
    let bmi = 0.0;
    bmi = w / Math.pow((h / 100), 2);
    return bmi;
  }
}
