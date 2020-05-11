import { Component, OnInit } from '@angular/core';
import { Course } from './course/course';
import { Observable } from 'rxjs';
import { HttpDataService } from './http-data.service';

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

  constructor(private coursesHttpService: HttpDataService) {}

  ngOnInit(): void {
    this.courses = this.coursesHttpService.getCourses();
  }
}
