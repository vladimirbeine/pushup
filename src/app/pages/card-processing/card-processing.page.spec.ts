import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardProcessingPage } from './card-processing.page';

describe('CardProcessingPage', () => {
  let component: CardProcessingPage;
  let fixture: ComponentFixture<CardProcessingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardProcessingPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardProcessingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
