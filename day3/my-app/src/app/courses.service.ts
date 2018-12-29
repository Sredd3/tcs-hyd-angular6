import { Injectable } from '@angular/core';
import { Course } from './course';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor() { }
  _courses=[
    {
      name:'Angular',
      duration:5,
      currentBatch:true,
      price:10000
    },
    {
      name:'React',
      duration:4,
      currentBatch:false,
      price:12000
    },
    {
      name:'Spring Boot',
      duration:3,
      currentBatch:false,
      price:20000
    },
    {
      name:'Webpack',
      duration: 2,
      currentBatch:false,
      price:5000
    },
    {
      name:'ES6',
      duration: 2,
      currentBatch:false,
      price:8000
    }

  ];

  get courses(){return this._courses};

  addCourse(course:Course):void{
    this._courses.push(course);
  }

  removeCourse(item:Course):void{
    this._courses.splice(this._courses.indexOf(item),1);
  }
}
