import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Dumb12Component } from './dumb12.component';

describe('Dumb12Component', () => {
  let component: Dumb12Component;
  let fixture: ComponentFixture<Dumb12Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Dumb12Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Dumb12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
