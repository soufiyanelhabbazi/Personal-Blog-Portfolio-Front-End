import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogPostSkeletonComponent } from './blog-post-skeleton.component';

describe('BlogPostSkeletonComponent', () => {
  let component: BlogPostSkeletonComponent;
  let fixture: ComponentFixture<BlogPostSkeletonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BlogPostSkeletonComponent]
    });
    fixture = TestBed.createComponent(BlogPostSkeletonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
