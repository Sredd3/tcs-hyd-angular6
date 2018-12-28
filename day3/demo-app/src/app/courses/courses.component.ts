import { Component, OnInit, AfterContentChecked, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit, AfterContentChecked {

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

  ngAfterContentInit(): void {
    //Called after ngOnInit when the component's or directive's content has been initialized.
    //Add 'implements AfterContentInit' to the class.
    console.log('@@ called only once @@');
  }

  ngAfterContentChecked(): void {
    //Called after every check of the component's or directive's content.
    //Add 'implements AfterContentChecked' to the class.
    console.log('^^ called inside the ngaftercontentchecked function ^^ ');
    alert('content checked ')
  }

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    console.log('After the child view has been loaded ..')
  }

  ngAfterViewChecked(): void {
    //Called after every check of the component's view. Applies to components only.
    //Add 'implements AfterViewChecked' to the class.
    console.log('called every time after the view has been loaded ..')
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
