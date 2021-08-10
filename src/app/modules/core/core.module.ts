// import angular framework module here
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { CoreLayoutComponent } from './components/core-layout/core-layout.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [CoreLayoutComponent, HeaderComponent, FooterComponent],
  imports: [SharedModule],
  exports: [CoreLayoutComponent]
})
export class CoreModule {}
