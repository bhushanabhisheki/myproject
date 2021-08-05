// import angular framework module here
import { NgModule } from '@angular/core';

// import all third party module here


// import all angular material module here
import { MatIconModule } from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';



// import app specific

@NgModule({
  declarations: [
  ],

  imports: [
    MatIconModule,
    MatButtonModule,
    MatDividerModule
  ],
  exports: [
    MatIconModule,
    MatButtonModule,
    MatDividerModule
  ],
})
export class SharedModule { }
