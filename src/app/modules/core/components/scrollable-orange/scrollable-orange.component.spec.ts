import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrollableOrangeComponent } from './scrollable-orange.component';

describe('ScrollableOrangeComponent', () => {
  let component: ScrollableOrangeComponent;
  let fixture: ComponentFixture<ScrollableOrangeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScrollableOrangeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScrollableOrangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
