import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styles: [
  ]
})
export class MenuComponent implements OnInit {
  items: MenuItem[]=[];

  constructor() { }

  ngOnInit(): void {
    this.items = [
      {
        label:'Pokemon Api',
        icon:'pi pi-desktop',
      },
      {
        label:'The Rick and Morty API',
        icon:'pi pi-android',
      },
    ];
  }

}

