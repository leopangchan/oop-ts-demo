import { NodeCourse } from './NodeCourse';

describe('NodeCourse', () => {
  let engCourse: NodeCourse;

  describe('getColor', () => {
    it('should return blue', () => {
      engCourse = new NodeCourse('math', 'Math', 400);
      expect(engCourse.getColor()).toBe('blue');
    });
  });
});
