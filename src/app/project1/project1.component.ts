import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project1',
  templateUrl: './project1.component.html',
  styleUrls: ['./project1.component.css']
})
export class Project1Component implements OnInit {

  english: string;
  chinese: string;
  criteria: string;
  dics: EnglishDic[] = [];
  constructor() { }

  ngOnInit() {
  }

  addWord() {
    const dic: EnglishDic = {
      english: this.english,
      chinese: this.chinese
    };
    this.dics.push(dic);
    this.english = '';
    this.chinese = '';
  }

}

export interface EnglishDic {
  english: string;
  chinese: string;
}
