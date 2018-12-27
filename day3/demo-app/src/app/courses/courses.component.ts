import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  constructor() { }

  title="Welcome to Learning Management System";
  courses=['Angular','React','Java8','Spring Boot' ];
  isActive = false;

  ngOnInit() {
  }

  handleClick($event){
    this.isActive = !this.isActive;
  }

  updateCourse(course){
    this.courses.push(course.value);
    course.value='';
  }

  removeItem(course){
    this.courses.splice(this.courses.indexOf(course),1)
  }

}
