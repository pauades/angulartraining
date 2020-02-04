import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Dumb11Component } from './dumb11.component';

describe('Dumb11Component', () => {
  let component: Dumb11Component;
  let fixture: ComponentFixture<Dumb11Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Dumb11Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Dumb11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
