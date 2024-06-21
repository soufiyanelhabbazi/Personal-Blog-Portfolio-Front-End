import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePostSkeletonComponent } from './home-post-skeleton.component';

describe('HomePostSkeletonComponent', () => {
  let component: HomePostSkeletonComponent;
  let fixture: ComponentFixture<HomePostSkeletonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomePostSkeletonComponent]
    });
    fixture = TestBed.createComponent(HomePostSkeletonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
