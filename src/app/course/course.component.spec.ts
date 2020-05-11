// import { TestBed, async } from '@angular/core/testing';
// import { CourseComponent } from './course.component';
//
// describe('CourseComponent', () => {
//   let component: CourseComponent;
//
//   beforeEach(async(() => {
//     TestBed.configureTestingModule({
//       declarations: [
//         CourseComponent
//       ],
//     }).compileComponents();
//     const fixture = TestBed.createComponent(CourseComponent);
//     component = fixture.componentInstance;
//   }));
//
//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
//
//   it('should return red for math course', () => {
//     component.course = {
//       type: 'math',
//       name: 'Math 101',
//       price: 500
//     };
//     component.ngOnInit();
//     expect(component.color).toBe('red');
//   });
//
//   it('should return blue for eng course', () => {
//     component.course = {
//       type: 'eng',
//       name: 'Eng 101',
//       price: 500
//     };
//     component.ngOnInit();
//     expect(component.color).toBe('blue');
//   });
//
//   it('should return yellow for hist course', () => {
//     component.course = {
//       type: 'hist',
//       name: 'Hist 101',
//       price: 500
//     };
//     component.ngOnInit();
//     expect(component.color).toBe('yellow');
//   });
// });
