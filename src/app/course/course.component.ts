import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit
} from '@angular/core';
import { Course } from './course';

@Component({
  selector: 'app-course',
  template: `
    <div
      class="container"
      [style.background-color]="color"
      [style.margin]="'10px'"
    >
      <h3>
        {{ course?.name }}
      </h3>
      <div>Price: {{ course?.price }}</div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CourseComponent implements OnInit {
  @Input() course: Course;

  public color: string;

  constructor() {}

  ngOnInit(): void {
    if (this.course.type === 'math') {
      this.color = 'red';
    } else if (this.course.type === 'eng') {
      this.color = 'blue';
    } else if (this.course.type === 'hist') {
      this.color = 'yellow';
    }
  }
}
