import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-green',
  templateUrl: './green.component.html',
  styleUrls: ['./green.component.css']
})
export class GreenComponent implements OnInit {
  items: number[] = [];
  constructor() {}

  ngOnInit() {
    for (let i = 1; i <= 40; i++) {
      this.items.push(i);
    }
  }
}
