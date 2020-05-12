import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit
} from '@angular/core';
import { Course } from './course';
import { CourseService } from './course.service';

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
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [CourseService]
})
export class CourseComponent implements OnInit {
  @Input() course: Course;

  public color: string;

  constructor(private courseService: CourseService) {}

  ngOnInit(): void {
    this.color = this.courseService.getColor(this.course.type);
  }
}
