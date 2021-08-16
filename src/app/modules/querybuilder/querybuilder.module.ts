// import angular framework module here
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { QueryToolbarComponent } from './components/query-toolbar/query-toolbar.component';
import { QuickAccessToolbarComponent } from './components/quick-access-toolbar/quick-access-toolbar.component';

@NgModule({
  declarations: [QueryToolbarComponent, QuickAccessToolbarComponent],
  imports: [SharedModule],
  exports: [QueryToolbarComponent, QuickAccessToolbarComponent]
})
export class QueryBuilderModule {}
