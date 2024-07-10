import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayListCourseComponent } from './display-list-course.component';

describe('DisplayListCourseComponent', () => {
  let component: DisplayListCourseComponent;
  let fixture: ComponentFixture<DisplayListCourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DisplayListCourseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplayListCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
