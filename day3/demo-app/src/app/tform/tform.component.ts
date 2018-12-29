import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tform',
  templateUrl: './tform.component.html',
  styleUrls: ['./tform.component.css']
})
export class TformComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  log(message){
    console.log('came inside the log methog');
    console.log(message);
  }

}
