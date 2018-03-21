import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-ng-model-driven',
  templateUrl: './ng-model-driven.component.html',
  styleUrls: ['./ng-model-driven.component.css']
})
export class NgModelDrivenComponent implements OnInit {

  form: FormGroup;
  constructor(private _fb: FormBuilder) { }

  ngOnInit() {
    this.form = this.buildForm();
  }

  buildForm(): FormGroup {
    return this._fb.group({
      name: ['', [Validators.required, Validators.minLength(4)]],
      email: '',
      address: this._fb.group({
        street: '',
        city: '',
        postalcode: ['', Validators.pattern('^[1-9][0-9]{4}')]
      })
    });
  }

}
