import {
  Logger,
} from '../../../export';

interface ClassInterface {
  [key: string]: Logger
}

class _LoggerController {
  private loggers: ClassInterface = {}

  public get(type: string): Logger {
    if(!this.loggers.hasOwnProperty(type)) {
        this.loggers[type] = new Logger(type);
    }
    return this.loggers[type];
  }

  public getSystemLogger(): Logger {
    return this.get("system");
  }
}

var LoggerController = new _LoggerController();

export { LoggerController };
