"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var course_1 = require("./course");
var CourseNames_1 = require("./CourseNames");
var product_1 = require("./product");
var angular = new course_1.Course(CourseNames_1.CourseName.ANGULAR, 6, 'Brand new course on Angular 6');
var react = new course_1.Course(CourseNames_1.CourseName.REACT, 3);
/*angular.setTitle('Angular 6')
angular.setDesc('A brand new course on Angular 6');
angular.setDurationInDays(5);*/
/*console.log(`
    The course name is ${angular.getTitle()} - ${angular.getDesc()}
    and will be for ${angular.getDurationInDays()}
`);

console.log(`
    The course name is ${react.title} - ${react.desc}
    and will be for ${react.durationInDays}
`);*/
var iphone = new product_1.Product('I-PhoneX', 42000, 'I Phone X model');
console.log(iphone.getName() + "  - " + iphone.getDescription());
