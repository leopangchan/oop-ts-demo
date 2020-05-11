import { Course } from "./course";

export class NodeCourse extends Course {
  constructor(type: string, name: string, price: number) {
    super(type, name, price);
  }

  /**
   * @override
   */
  public getColor() {
    return "blue";
  }
}
