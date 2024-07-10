import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayGridCourseComponent } from './display-grid-course.component';

describe('DisplayGridCourseComponent', () => {
  let component: DisplayGridCourseComponent;
  let fixture: ComponentFixture<DisplayGridCourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DisplayGridCourseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplayGridCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
