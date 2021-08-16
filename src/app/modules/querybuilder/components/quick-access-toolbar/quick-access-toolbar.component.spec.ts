import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuickAccessToolbarComponent } from './quick-access-toolbar.component';

describe('QuickAccessToolbarComponent', () => {
  let component: QuickAccessToolbarComponent;
  let fixture: ComponentFixture<QuickAccessToolbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuickAccessToolbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuickAccessToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
