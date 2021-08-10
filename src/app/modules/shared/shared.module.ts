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

// import app specific
import { ThemeSwitchComponent } from './components/theme-switch/theme-switch.component';

@NgModule({
  declarations: [ThemeSwitchComponent],

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
    FlexLayoutModule,
    AngularSlickgridModule,
    GridsterModule
  ],
  exports: [
    ThemeSwitchComponent,
    MatIconModule,
    MatButtonModule,
    MatDividerModule,
    MatButtonToggleModule,
    MatMenuModule,
    MatToolbarModule,
    MatListModule,
    MatTooltipModule,
    MatFormFieldModule,
    FlexLayoutModule,
    AngularSlickgridModule,
    GridsterModule
  ]
})
export class SharedModule {}
