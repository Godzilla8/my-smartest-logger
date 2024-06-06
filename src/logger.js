const fs = require("fs");
const path = require("path");
const chalk = require("chalk");

class Logger {
  constructor(options = {}) {
    this.logFile = options.logFile ? path.resolve(options.logFile) : null;
  }

  log(level, message) {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] [${level.toUpperCase()}] ${message}`;

    switch (level) {
      case "info":
        console.log(chalk.blue(logMessage));
        break;
      case "warning":
        console.warn(chalk.yellow(logMessage));
        break;
      case "error":
        console.error(chalk.red(logMessage));
        break;
      case "debug":
        console.debug(chalk.green(logMessage));
        break;
      default:
        console.log(logMessage);
    }

    if (this.logFile) {
      fs.appendFileSync(this.logFile, logMessage + "\n");
    }
  }

  info(message) {
    this.log("info", message);
  }

  warn(message) {
    this.log("warning", message);
  }

  error(message) {
    this.log("error", message);
  }

  debug(message) {
    this.log("debug", message);
  }
}

module.exports = Logger;
