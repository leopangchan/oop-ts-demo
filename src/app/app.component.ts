import { Component, OnInit } from '@angular/core';
import { Course } from './course/entities/course';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpDataService } from './http-data.service';
import { CourseService } from './course/course.service';

@Component({
  selector: 'app-root',
  template: `
    <ng-container *ngFor="let course of (courses | async)">
      <app-course [course]="course"></app-course>
    </ng-container>
  `
})
export class AppComponent implements OnInit {
  courses: Observable<Course[]>;

  constructor(
    private httpDataService: HttpDataService,
    private courseService: CourseService
  ) {}

  ngOnInit(): void {
    this.courses = this.httpDataService.getCourses().pipe(
      map(res => {
        return res.map(({ type, name, price }) =>
          this.courseService.getCourseEntity(type, name, price)
        );
      })
    );
  }
}
