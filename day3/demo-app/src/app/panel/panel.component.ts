import { Component, OnInit, Input, AfterContentChecked, AfterContentInit } from '@angular/core';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit, AfterContentChecked, AfterContentInit{

  @Input('url') imageUrl;

  constructor() { }

  ngOnInit() {
  }

  ngAfterContentChecked(){
    console.log('Inside the panel component ng after content checked');
  }

  ngAfterContentInit(){
    console.log('Inside the panel component ng after content init');
  }

}
