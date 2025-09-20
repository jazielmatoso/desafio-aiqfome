import { LoggerService, Injectable, Scope } from '@nestjs/common';
import { createLogger, Logger, transports } from 'winston';

// We inject a transient instance of the Logger into our feature modules
// so that each one has its own custom context.
@Injectable({ scope: Scope.TRANSIENT })
export class AppLogger implements LoggerService {
  private context?: string;
  private winstonLogger: Logger;
  private enabled = true;

  constructor() {
    const transport = new transports.Console({
      /* istanbul ignore next */
      log(info: { message: string; context?: string; meta?: object }, next) {
        try {
          console.log(
            info?.context || '',
            info.message || '',
            info.meta ? JSON.stringify(info.meta) : '',
          );
        } catch {
          console.log(
            info?.context || '',
            info.message || '',
            info.meta ? info.meta : '',
          );
        }

        if (next) {
          next();
        }
      },
    });

    this.winstonLogger = createLogger({
      transports: [transport],
    });
  }

  setContext(context: string) {
    this.context = context;
  }

  log(message: string, meta = {}, context?: string): void {
    if (this.enabled) {
      this.winstonLogger.info(message, {
        context: context || this.context,
        meta,
      });
    }
  }

  error(message: string, meta = {}, trace?: string, context?: string): void {
    if (this.enabled) {
      this.winstonLogger.error(message, {
        context: context || this.context,
        meta,
        trace,
      });
    }
  }

  warn(message: string, meta = {}, context?: string): void {
    if (this.enabled) {
      this.winstonLogger.warn(message, {
        context: context || this.context,
        meta,
      });
    }
  }

  debug(message: string, meta = {}, context?: string): void {
    if (this.enabled) {
      this.winstonLogger.debug(message, {
        context: context || this.context,
        meta,
      });
    }
  }

  verbose(message: string, meta = {}, context?: string): void {
    if (this.enabled) {
      this.winstonLogger.verbose(message, {
        context: context || this.context,
        meta,
      });
    }
  }
}
