import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DonationsAmountProcessingPage } from './donations-amount-processing.page';

describe('DonationsAmountProcessingPage', () => {
  let component: DonationsAmountProcessingPage;
  let fixture: ComponentFixture<DonationsAmountProcessingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DonationsAmountProcessingPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DonationsAmountProcessingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
