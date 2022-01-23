import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: './tab1.component.html',
  styleUrls: ['./tab1.component.scss']
})
export class Tab1Component implements OnInit {
  personalData = ['Name: Emir Ale', 'Age: 30', 'Current City: Cordoba', 'Birth City: Catamarca', ''];

  constructor() { }

  ngOnInit(): void {
  }

}
