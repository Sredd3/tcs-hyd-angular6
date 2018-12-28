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
  products=[
    {
      title:'IPhone',
      desc:'I Phone X - Loaded with all new features'
    },
    {
      title:'MacBookPro',
      desc:'An awesome looking with powerfull features of a beast'
    },
    {
      title:'Apple watch',
      desc:'Awesome looking watch !!'
    }


  ]

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

  addToCart(product){
    console.log(`Came inside the addToCart function ${product.title} and desc ${product.desc}`);
  }

}
