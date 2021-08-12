// import angular framework module here
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { QueryToolbarComponent } from './components/query-toolbar/query-toolbar.component';

@NgModule({
  declarations: [QueryToolbarComponent],
  imports: [SharedModule],
  exports: [QueryToolbarComponent]
})
export class QueryBuilderModule {}
