const Logger = require("./logger");
const ErrorHandler = require("./errorHandler");

const createLogger = (options) => new Logger(options);
const createErrorHandler = (logger) => new ErrorHandler(logger);

module.exports = { createLogger, createErrorHandler };
