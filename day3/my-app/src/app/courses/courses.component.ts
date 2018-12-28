import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent {

  constructor() { }

  newCourse:string;

  courses=[
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

  ]

  /*submitCourse(courseName){
    this.courses.push({name:courseName.value,duration:3,currentBatch:false,price:12000});
    courseName.value='';
  }*/
  submitCourse(){
    this.courses.push({name:this.newCourse,duration:3,currentBatch:false,price:12000});
    this.newCourse='';
  }

  addItemToCart(item){
    console.log(`Fetched the item selected by the user ${item.name}`);
  }

}
