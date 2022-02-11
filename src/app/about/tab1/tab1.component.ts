import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: './tab1.component.html',
  styleUrls: ['./tab1.component.scss']
})
export class Tab1Component implements OnInit {
  personalData = [
    {
      tittle: 'Name:',
      content: ' Emir Ale'
    },
    {
      tittle: 'Age:', 
      content: ' 30'
    },
    {
      tittle:'Current City:',
      content: ' Cordoba'
    },
    {
      tittle: 'Birth City:',
      content: ' Catamarca'
    }];

  constructor() { }

  ngOnInit(): void {
  }

}
