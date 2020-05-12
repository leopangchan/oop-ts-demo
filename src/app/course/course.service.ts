import { Injectable } from '@angular/core';

@Injectable()
export class CourseService {
  constructor() {}

  public getColor(type: string): string {
    if (type === 'math') {
      return 'red';
    } else if (type === 'eng') {
      return 'blue';
    } else if (type === 'hist') {
      return 'yellow';
    }
  }
}
