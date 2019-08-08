import {
  Logger,
} from '../../export';

interface ClassInterface {
  [key: string]: Logger
}
/* #1 way
  // object containing get function
  // to get already instanciated obj
  // or instanciate it and get it;
  // var _Logger = (function(){
  //   // Private
  //   var loggers: loggers_namespace = {};
  //
  //   // Public
  //   function get(type: string) {
  //     type = type || 'system';
  //
  //     if(!loggers.hasOwnProperty(type)) {
  //       // create logger
  //       loggers[type] = new Logger(type);
  //     }
  //     // return if there is one
  //     return loggers[type];
  //   }
  //   // Interface
  //   return {
  //     get: get
  //   }
  // })();
*/

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
