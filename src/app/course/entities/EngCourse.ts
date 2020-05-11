import { Course } from "./course";

export class EngCourse extends Course {
  constructor(type: string, name: string, price: number) {
    super(type, name, price);
  }

  /**
   * @override
   */
  public getColor() {
    if (this.price > 500) {
      return "red";
    } else {
      return "blue";
    }
  }
}
