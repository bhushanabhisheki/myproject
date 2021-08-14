import { Component } from '@angular/core';

@Component({
  selector: 'app-list-search-card',
  templateUrl: './list-search-card.component.html',
  styleUrls: ['./list-search-card.component.scss']
})
export class ListSearchCardComponent {
  searchValue = '';
  students = [
    'bhushan',
    'anuja',
    'kavita',
    'savita',
    'bhushan',
    'anuja',
    'kavita',
    'savita',
    'bhushan',
    'anuja',
    'kavita',
    'savita',
    'bhushan',
    'anuja',
    'kavita',
    'savita'
  ];
}
