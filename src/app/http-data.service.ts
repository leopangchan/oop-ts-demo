import { Injectable } from "@angular/core";
import { Course } from "./course/course";
import { Observable, of } from "rxjs";

@Injectable()
export class HttpDataService {
  getCourses(): Observable<Course[]> {
    const courses: Course[] = [
      {
        type: "eng",
        name: "Eng 101",
        price: 400
      },
      {
        type: "hist",
        name: "Hist 101",
        price: 500
      },
      {
        type: "eng",
        name: "Eng 102",
        price: 500
      },
      {
        type: "math",
        name: "Math 101",
        price: 500
      }
    ];
    return of(courses);
  }
}
