import { Component, OnInit } from '@angular/core';
import { Course } from '../course';
import { CoursesService } from '../courses.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.scss']
})
export class AddCourseComponent implements OnInit {

  constructor(private courseService:CoursesService, private router:Router) { }

  ngOnInit() {
  }

  handleSubmit(f){
    let course:Course = {id: Math.random(), name:f.value.courseName, duration:f.value.duration, currentBatch:false, price:f.value.price,rating:5, startDate:new Date()};
    this.courseService.addCourse(course);
    this.router.navigate(['courses/list']);
  }
}
