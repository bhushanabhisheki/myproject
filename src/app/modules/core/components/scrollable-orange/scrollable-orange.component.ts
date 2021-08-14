import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-scrollable-orange',
  templateUrl: './scrollable-orange.component.html',
  styleUrls: ['./scrollable-orange.component.css']
})
export class ScrollableOrangeComponent implements OnInit {

  @Input() title?: string = "1";

  constructor() { }


  ngOnInit() {
  }

}
