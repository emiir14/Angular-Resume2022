import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: './tab2.component.html',
  styleUrls: ['./tab2.component.scss']
})
export class Tab2Component implements OnInit {

  technologies = [
    {
      name: 'Angular 13',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/240px-Angular_full_color_logo.svg.png'
    },
    {
      name: 'Javascript',
      image: 'https://openclipart.org/download/272343/1486640684.svg'
    },
    {
      name: 'Bootstrap 4',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/1200px-Bootstrap_logo.svg.png'
    }
  ];
  technologies2 = [
    {
      name: 'Github',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/1200px-Octicons-mark-github.svg.png'
    },
    {
      name: 'Typescript',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/2048px-Typescript_logo_2020.svg.png'
    },
    {
      name: 'Scss',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Sass_Logo_Color.svg/2560px-Sass_Logo_Color.svg.png'
    }
  ];


  constructor() { }

  ngOnInit(): void {
  }

}
