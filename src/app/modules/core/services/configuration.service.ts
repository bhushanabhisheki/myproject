import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConfigurationService {
  logging: boolean | undefined;

  constructor(private httpClient: HttpClient) {}

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  async loadConfiguration(): Promise<any> {
    const config = await this.httpClient.get('/ewp-dashboard/app').toPromise();
    Object.assign(this, config);
    return config;
  }
}
