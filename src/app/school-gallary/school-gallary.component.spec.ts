import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolGallaryComponent } from './school-gallary.component';

describe('SchoolGallaryComponent', () => {
  let component: SchoolGallaryComponent;
  let fixture: ComponentFixture<SchoolGallaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchoolGallaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchoolGallaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
