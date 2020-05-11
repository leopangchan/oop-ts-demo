import { EngCourse } from './EngCourse';

describe('EngCourse', () => {
  let engCourse: EngCourse;

  describe('getColor', () => {
    it('should getColor', () => {
      engCourse = new EngCourse('eng', 'English', 400);
      expect(engCourse.getColor()).toBe('blue');
    });

    it('should getColor', () => {
      engCourse = new EngCourse('eng', 'English', 600);
      expect(engCourse.getColor()).toBe('red');
    });
  });
});
