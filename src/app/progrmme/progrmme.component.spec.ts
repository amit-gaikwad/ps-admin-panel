import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgrmmeComponent } from './progrmme.component';

describe('ProgrmmeComponent', () => {
  let component: ProgrmmeComponent;
  let fixture: ComponentFixture<ProgrmmeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgrmmeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgrmmeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
