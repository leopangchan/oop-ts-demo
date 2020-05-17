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
    const courses = {
      math: MathCourse,
      eng: EngCourse,
      hist: HistCourse,
      java: JavaCourse,
      node: NodeCourse,
    };

    return courses.hasOwnProperty(type) ? (new courses[type](type, name, price)) : new Course('N/A', 'N/A', 0);
  }
}
