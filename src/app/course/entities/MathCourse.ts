import { Course } from './course';

export class MathCourse extends Course {
  constructor(type: string, name: string, price: number) {
    super(type, name, price);
  }

  /**
   * @override
   */
  public getColor() {
    return 'red';
  }
}
