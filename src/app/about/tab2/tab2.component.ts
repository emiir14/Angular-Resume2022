import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: './tab2.component.html',
  styleUrls: ['./tab2.component.scss']
})
export class Tab2Component implements OnInit {
  technologies = [
    'Angular 9',
    'Javascript',
    'Bootstrap 4',
    'Github',
    'Typescript',
    'CSS',
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
