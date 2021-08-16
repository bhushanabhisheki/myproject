// import angular framework module here
import { NgModule } from '@angular/core';

// import all third party module here
import { FlexLayoutModule } from '@angular/flex-layout';
import { AngularSlickgridModule } from 'angular-slickgrid';
import { GridsterModule } from 'angular-gridster2';

// import all angular material module here
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';

// import app specific
import { ThemeSwitchComponent } from './components/theme-switch/theme-switch.component';
import { DateRangePickerComponent } from './components/date-range-picker/date-range-picker.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SearchListComponent } from './components/search-list/search-list.component';
import { SearchListItemsComponent } from './components/search-list-items/search-list-items.component';

@NgModule({
  declarations: [
    ThemeSwitchComponent,
    DateRangePickerComponent,
    SearchListComponent,
    SearchListItemsComponent
  ],

  imports: [
    MatIconModule,
    MatButtonModule,
    MatDividerModule,
    MatButtonToggleModule,
    MatMenuModule,
    MatToolbarModule,
    MatListModule,
    MatTooltipModule,
    MatFormFieldModule,
    MatSidenavModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCardModule,
    MatCheckboxModule,
    FlexLayoutModule,
    AngularSlickgridModule,
    GridsterModule,
    CommonModule,
    FormsModule
  ],
  exports: [
    ThemeSwitchComponent,
    DateRangePickerComponent,
    SearchListComponent,
    SearchListItemsComponent,
    MatIconModule,
    MatButtonModule,
    MatDividerModule,
    MatButtonToggleModule,
    MatMenuModule,
    MatToolbarModule,
    MatListModule,
    MatTooltipModule,
    MatFormFieldModule,
    MatSidenavModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCardModule,
    MatCheckboxModule,
    FlexLayoutModule,
    AngularSlickgridModule,
    GridsterModule,
    CommonModule
  ]
})
export class SharedModule {}
