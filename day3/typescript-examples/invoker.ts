import { Course } from './course';
import { CourseName } from './CourseNames';

let angular = new Course(CourseName.ANGULAR, 6,'Brand new course on Angular 6');
let react = new Course(CourseName.REACT, 3);
/*angular.setTitle('Angular 6')
angular.setDesc('A brand new course on Angular 6');
angular.setDurationInDays(5);*/
/*console.log(`
    The course name is ${angular.getTitle()} - ${angular.getDesc()}
    and will be for ${angular.getDurationInDays()}
`);
*/
console.log(`
    The course name is ${react.title} - ${react.desc}
    and will be for ${react.durationInDays}
`);
