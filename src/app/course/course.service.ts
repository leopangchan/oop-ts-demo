import { Injectable } from '@angular/core';
import { Course } from './entities/course';
import { HistCourse } from './entities/HistCourse';
import { MathCourse } from './entities/MathCourse';
import { EngCourse } from './entities/EngCourse';
import { JavaCourse } from './entities/JavaCourse';
import { NodeCourse } from './entities/NodeCourse';


@Injectable()
export class CourseService {
  constructor() {}

  public getCourseEntity(type: string, name: string, price: number) {
    if (type === 'math') {
      return new MathCourse(type, name, price);
    } else if (type === 'eng') {
      return new EngCourse(type, name, price);
    } else if (type === 'hist') {
      return new HistCourse(type, name, price);
    } else if (type === 'java') {
      return new JavaCourse(type, name, price);
    } else if (type === 'node') {
      return new NodeCourse(type, name, price);
    } else {
      return new Course('N/A', 'N/A', 0);
    }
  }
}
