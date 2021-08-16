import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SearchListItemsComponent } from './search-list-items.component';

describe('SearchListItemsComponent', () => {
  let component: SearchListItemsComponent;
  let fixture: ComponentFixture<SearchListItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SearchListItemsComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchListItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
