import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dyclass',
  templateUrl: './dyclass.component.html',
  styleUrls: ['./dyclass.component.css']
})
export class DyclassComponent implements OnInit {

  @ViewChild('pc') pc: ElementRef;
  num1 = 0;
  num2 = 0;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.num1 = this.route.snapshot.params.num1;
    this.num2 = this.route.snapshot.params.num2;
  }

  addc() {
    this.pc.nativeElement.classList.add('rdd');
  }

  rmc() {
    this.pc.nativeElement.classList.remove('rdd');
  }

}
