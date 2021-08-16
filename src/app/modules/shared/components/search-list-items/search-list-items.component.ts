import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-list-items',
  templateUrl: './search-list-items.component.html',
  styleUrls: ['./search-list-items.component.scss']
})
export class SearchListItemsComponent implements OnInit {
  items: number[] = [];

  ngOnInit(): void {
    for (let i = 1; i <= 40; i++) {
      this.items.push(i);
    }
  }
}
