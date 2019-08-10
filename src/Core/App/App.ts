import {
  LoggerController,
  Logger
} from '../../export';

interface AppInterface {
  start(): void;
};

export class App implements AppInterface{
  // Private
  private _Logger: Logger;

  // Public
  start() {
    // Logger Setup
      this._Logger = LoggerController.getSystemLogger();
      var log = this._Logger.log.bind(this._Logger);
    // Mediator Setup

    log('App Started');
  }
};
