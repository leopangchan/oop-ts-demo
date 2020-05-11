import { MathCourse } from './MathCourse';

describe('MathCourse', () => {
  let engCourse: MathCourse;

  describe('getColor', () => {
    it('should return red', () => {
      engCourse = new MathCourse('math', 'Math', 400);
      expect(engCourse.getColor()).toBe('red');
    });
  });
});
