import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rocket',
  templateUrl: './rocket.component.html',
  styleUrls: ['./rocket.component.scss']
})
export class RocketComponent implements OnInit {
  title = 'Hello World App';
  constructor() { }

  ngOnInit(): void {
  }

}
