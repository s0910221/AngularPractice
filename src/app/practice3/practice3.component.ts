import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-practice3',
  templateUrl: './practice3.component.html',
  styleUrls: ['./practice3.component.css']
})
export class Practice3Component implements OnInit {
  users: Object[] = [
    { 'name': 'a', 'addr': 'aa' },
    { 'name': 'b', 'addr': 'bb' }
  ];
  nums: number[] = [];
  now = new Date();
  aaa: Account = {
    account: '123',
    password: '555'
  };

  constructor() {
    for (let i = 10; i <= 80; i += 10) {
      this.nums.push(i);
    }
  }

  ngOnInit() {
  }

}

export interface Account {
  account: string;
  password: string;
}