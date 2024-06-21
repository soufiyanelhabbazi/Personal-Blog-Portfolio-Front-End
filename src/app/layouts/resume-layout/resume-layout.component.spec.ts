import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeLayoutComponent } from './resume-layout.component';

describe('ResumeLayoutComponent', () => {
  let component: ResumeLayoutComponent;
  let fixture: ComponentFixture<ResumeLayoutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResumeLayoutComponent]
    });
    fixture = TestBed.createComponent(ResumeLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
