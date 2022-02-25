import { ConfigurationService } from './configuration.service';
import { LoggingService } from './logging.service';
export function initServicesFactory(
  configurationService: ConfigurationService,
  loggingService: LoggingService
) {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  return async () => {
    console.log('initServicesFactory - started');
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const config = await configurationService.loadConfiguration();
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    loggingService.initialize(config.logging);
    console.log('initServicesFactory - completed');
    loggingService.log('sample' + config.logging);
  };
}
