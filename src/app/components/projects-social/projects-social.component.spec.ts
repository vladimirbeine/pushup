import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsSocialPage } from './projects-social.page';

describe('ProjectsSocialPage', () => {
  let component: ProjectsSocialPage;
  let fixture: ComponentFixture<ProjectsSocialPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectsSocialPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectsSocialPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
