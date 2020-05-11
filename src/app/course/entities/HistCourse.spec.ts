import { HistCourse } from './HistCourse';

describe('HistCourse', () => {
  let histCourse: HistCourse;

  describe('getColor', () => {
    it('should getColor', () => {
      histCourse = new HistCourse('hist', 'History', 300);
      expect(histCourse.getColor()).toBe('red');
    });

    it('should getColor', () => {
      histCourse = new HistCourse('hist', 'History', 500);
      expect(histCourse.getColor()).toBe('yellow');
    });
  });
});
