import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input('p') product:{title:string, desc:string}

  @Output('select') select = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  handleSelect(product){
    this.select.emit(product);
  }

}
