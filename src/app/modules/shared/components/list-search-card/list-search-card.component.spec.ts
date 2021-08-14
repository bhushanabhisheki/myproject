import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSearchCardComponent } from './list-search-card.component';

describe('ListSearchCardComponent', () => {
  let component: ListSearchCardComponent;
  let fixture: ComponentFixture<ListSearchCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListSearchCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListSearchCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
