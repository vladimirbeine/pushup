import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCampainPage } from './create-campain.page';

describe('CreateCampainPage', () => {
  let component: CreateCampainPage;
  let fixture: ComponentFixture<CreateCampainPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateCampainPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateCampainPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
