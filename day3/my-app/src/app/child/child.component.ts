import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  @Input('course') test;
  @Output('cart')  updateCart = new EventEmitter();
  buttonState:boolean = false;
  constructor() { }

  ngOnInit() {
  }

  addItems(item){

    this.updateCart.emit(item);
    this.buttonState = !this.buttonState;
    
  }

}
