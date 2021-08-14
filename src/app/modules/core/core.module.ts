// import angular framework module here
import { NgModule } from '@angular/core';
import { QueryBuilderModule } from '../querybuilder/querybuilder.module';
import { SharedModule } from '../shared/shared.module';
import { BlueComponent } from './components/blue/blue.component';
import { CoreLayoutComponent } from './components/core-layout/core-layout.component';
import { FooterComponent } from './components/footer/footer.component';
import { GreenComponent } from './components/green/green.component';
import { HeaderComponent } from './components/header/header.component';
import { MainBodyComponent } from './components/main-body/main-body.component';
import { RedComponent } from './components/red/red.component';
import { ScrollableOrangeComponent } from './components/scrollable-orange/scrollable-orange.component';
import { SubHeaderComponent } from './components/sub-header/sub-header.component';
import { YellowComponent } from './components/yellow/yellow.component';

@NgModule({
  declarations: [
    CoreLayoutComponent,
    HeaderComponent,
    SubHeaderComponent,
    MainBodyComponent,
    FooterComponent,
    BlueComponent,
    RedComponent,
    YellowComponent,
    GreenComponent,
    ScrollableOrangeComponent
  ],
  imports: [SharedModule, QueryBuilderModule],
  exports: [CoreLayoutComponent]
})
export class CoreModule {}
