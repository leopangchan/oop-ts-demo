import { CourseService } from './course.service';

describe('CourseService', () => {
  let service: CourseService;

  beforeEach(() => {
    service = new CourseService();
  });

  describe('getColor', () => {
    describe('math course', () => {
      it('should return red', () => {
        expect(service.getColor({
          type: 'math',
          name: 'Math',
          price: 400
        })).toBe('red');
      });
    });


    describe('english course', () => {
      it('should return blue that is cheaper than 500', () => {
        expect(service.getColor({
          type: 'eng',
          name: 'English',
          price: 500
        })).toBe('blue');
      });


      it('should return red that is more than 500', () => {
        expect(service.getColor({
          type: 'eng',
          name: 'English',
          price: 550
        })).toBe('red');
      });
    });

    describe('history course', () => {
      it('should return red that is cheaper than 400', () => {
        expect(service.getColor({
          type: 'hist',
          name: 'History',
          price: 300
        })).toBe('red');
      });

      it('should return yellow that is higher than 500', () => {
        expect(service.getColor({
          type: 'hist',
          name: 'History',
          price: 500
        })).toBe('yellow');
      });
    });


    describe('java course', () => {
      it('should return red that is higher than 500', () => {
        expect(service.getColor({
          type: 'java',
          name: 'Java',
          price: 550
        })).toBe('red');
      });

      it('should return blue that is lower than 500', () => {
        expect(service.getColor({
          type: 'java',
          name: 'Java',
          price: 300
        })).toBe('blue');
      });
    });

    describe('math course', () => {
      it('should return red', () => {
        expect(service.getColor({
          type: 'math',
          name: 'Math',
          price: 300
        })).toBe('red');
      });
    });

    describe('node course', () => {
      it('should return blue', () => {
        expect(service.getColor({
          type: 'node',
          name: 'Node',
          price: 300
        })).toBe('blue');
      });
    });

    describe('unknown course', () => {
      it('should return grey', () => {
        expect(service.getColor({
          type: 'unknown',
          name: 'Unknown',
          price: 300
        })).toBe('grey');
      });
    });
  });
});
