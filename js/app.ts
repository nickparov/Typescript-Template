import _Logger from './Controllers/Logger/Logger';


var Logger = new _Logger('System'),
    log = Logger.log.bind(Logger);

log("Hello");
