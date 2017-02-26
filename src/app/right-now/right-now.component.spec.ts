/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RightNowComponent } from './right-now.component';

describe('RightNowComponent', () => {
  let component: RightNowComponent;
  let fixture: ComponentFixture<RightNowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RightNowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RightNowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
