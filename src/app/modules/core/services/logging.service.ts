import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggingService {
  enabled: boolean | undefined;

  initialize(enabled: boolean): void {
    this.enabled = enabled;
  }

  log(message: string): void {
    console.log('bhushan debugs' + message);

    if (this.enabled) {
      console.log(message);
    }
  }
}
