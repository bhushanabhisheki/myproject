import { Component } from '@angular/core';
import { LoggingService } from './modules/core/services/logging.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'EwpDashboard';

  constructor(private loggingService: LoggingService) {
    // eslint-disable-next-line @typescript-eslint/restrict-plus-operands
    console.log('Enabled = ' + this.loggingService.enabled);
  }
}
