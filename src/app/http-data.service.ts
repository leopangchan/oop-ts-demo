import { Injectable } from '@angular/core';
import { Course } from './course/course';
import { Observable, of } from 'rxjs';

@Injectable()
export class HttpDataService {
  getCourses(): Observable<Course[]> {
    const courses: Course[] = [
      {
        type: 'eng',
        name: 'Eng 101',
        price: 400
      },
      {
        type: 'eng',
        name: 'Eng 102',
        price: 600
      },
      {
        type: 'hist',
        name: 'Hist 101',
        price: 500
      },
      {
        type: 'math',
        name: 'Math 101',
        price: 500
      },
      {
        type: 'node',
        name: 'Node 101',
        price: 500
      },
      {
        type: 'java',
        name: 'Java 102',
        price: 600
      },
      {
        type: 'java',
        name: 'Java 101',
        price: 200
      }
    ];
    return of(courses);
  }
}
