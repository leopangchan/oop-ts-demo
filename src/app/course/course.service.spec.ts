import { CourseService } from './course.service';

describe('CourseService', () => {
  let service: CourseService;

  beforeEach(() => {
    service = new CourseService();
  });

  describe('getColor', () => {
    it('should return red for math course', () => {
      expect(service.getColor('math')).toBe('red');
    });

    it('should return blue for eng course', () => {
      expect(service.getColor('eng')).toBe('blue');
    });

    it('should return yellow for hist course', () => {
      expect(service.getColor('hist')).toBe('yellow');
    });
  });
});
