import { JavaCourse } from './JavaCourse';

describe('JavaCourse', () => {
  let engCourse: JavaCourse;

  describe('getColor', () => {
    it('should return red', () => {
      engCourse = new JavaCourse('java', 'Java', 550);
      expect(engCourse.getColor()).toBe('red');
    });

    it('should return blue', () => {
      engCourse = new JavaCourse('java', 'Java', 300);
      expect(engCourse.getColor()).toBe('blue');
    });
  });
});
