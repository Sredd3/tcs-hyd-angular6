"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var course_1 = require("./course");
var angular = new course_1.Course('angular', 6, 'Brand new course on Angular 6');
var react = new course_1.Course('React', 3);
/*angular.setTitle('Angular 6')
angular.setDesc('A brand new course on Angular 6');
angular.setDurationInDays(5);*/
/*console.log(`
    The course name is ${angular.getTitle()} - ${angular.getDesc()}
    and will be for ${angular.getDurationInDays()}
`);
*/
console.log("\n    The course name is " + react.title + " - " + react.desc + "\n    and will be for " + react.durationInDays + "\n");
