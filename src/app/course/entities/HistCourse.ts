import { Course } from "./course";

export class HistCourse extends Course {
  constructor(type: string, name: string, price: number) {
    super(type, name, price);
  }

  /**
   * @override
   */
  public getColor() {
    if (this.price < 400) {
      return "red";
    } else {
      return "yellow";
    }
  }
}
