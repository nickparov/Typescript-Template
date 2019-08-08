// Structure Tree
/*
  -> App
     |
      - LoggerController
      - Mediator
        |
         - InputController
         - UIController
*/
import {
  LoggerController,
  Logger
} from './export';

interface AppInterface {
  start(): void;
};

class App {
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

// Declare and instanciate Application
var Application = new App();
// Start Application
Application.start();
