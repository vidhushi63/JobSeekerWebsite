import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobApplictionComponent } from './job-appliction.component';

describe('JobApplictionComponent', () => {
  let component: JobApplictionComponent;
  let fixture: ComponentFixture<JobApplictionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobApplictionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JobApplictionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
