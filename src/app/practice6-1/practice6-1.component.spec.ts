import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Practice61Component } from './practice6-1.component';

describe('Practice61Component', () => {
  let component: Practice61Component;
  let fixture: ComponentFixture<Practice61Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Practice61Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Practice61Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
