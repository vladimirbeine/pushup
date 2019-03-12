import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDonationPage } from './add-donation.page';

describe('AddDonationPage', () => {
  let component: AddDonationPage;
  let fixture: ComponentFixture<AddDonationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddDonationPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDonationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
