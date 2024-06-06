class ErrorHandler {
  constructor(logger) {
    this.logger = logger;
  }

  handleError(error) {
    this.logger.error(`Error: ${error.message}`);
    // Optionally, you can add more error handling logic here
  }

  handlePromiseRejection(reason, promise) {
    this.logger.error(`Unhandled Rejection at: ${promise}, reason: ${reason}`);
    // Optionally, you can add more promise rejection handling logic here
  }
}

module.exports = ErrorHandler;
