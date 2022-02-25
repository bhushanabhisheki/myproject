import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CoreModule } from './modules/core/core.module';
import { QueryBuilderModule } from './modules/querybuilder/querybuilder.module';
import { SharedModule } from './modules/shared/shared.module';
import { initServicesFactory } from './modules/core/services/init-services.factory';
import { ConfigurationService } from './modules/core/services/configuration.service';
import { LoggingService } from './modules/core/services/logging.service';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    CoreModule,
    QueryBuilderModule
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initServicesFactory,
      multi: true,
      deps: [ConfigurationService, LoggingService]
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
