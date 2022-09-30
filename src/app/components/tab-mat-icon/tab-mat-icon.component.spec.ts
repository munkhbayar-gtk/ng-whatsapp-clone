/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TabMatIconComponent } from './tab-mat-icon.component';

describe('TabMatIconComponent', () => {
  let component: TabMatIconComponent;
  let fixture: ComponentFixture<TabMatIconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabMatIconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabMatIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
