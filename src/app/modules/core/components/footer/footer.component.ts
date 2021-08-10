import { Component } from '@angular/core';
import { AppConfig } from 'src/app/modules/shared/config/app.config';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  copyrightText = AppConfig.copyright;
}
