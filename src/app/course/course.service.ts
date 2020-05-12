import { Injectable } from '@angular/core';
import { Course } from './course';

@Injectable()
export class CourseService {
  constructor() {}

  public getColor({ type, price }: Course): string {
    if (type === 'math') {
      return 'red';
    } else if (type === 'eng') {
      if (price > 500) {
        return 'red';
      } else {
        return 'blue';
      }
    } else if (type === 'hist') {
      if (price < 400) {
        return 'red';
      } else {
        return 'yellow';
      }
    } else if (type === 'java') {
      if (price > 500) {
        return 'red';
      } else {
        return 'blue';
      }
    } else if (type === 'node') {
      return 'blue';
    } else {
      return 'grey';
    }
  }
}
