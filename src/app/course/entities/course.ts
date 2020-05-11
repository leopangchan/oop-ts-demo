export class Course {
  constructor(public type: string, public name: string, public price: number) {}

  getColor(): string {
    return 'grey';
  }
}

export interface CourseRes {
  type: string;
  name: string;
  price: number;
}
