import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Dumb13Component } from './dumb13.component';

describe('Dumb13Component', () => {
  let component: Dumb13Component;
  let fixture: ComponentFixture<Dumb13Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Dumb13Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Dumb13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
