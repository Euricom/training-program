export class RequestError extends Error {
  details: any;
  constructor(
    public status: number,
    public statusText: string,
    response?: any,
  ) {
    super();

    // Maintains proper stack trace for where our error was thrown
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, this.constructor);
    }

    // Set the prototype explicitly (to use instanceof)
    Object.setPrototypeOf(this, RequestError.prototype);

    // Replace Error with ClassName of the constructor
    if (this.name === undefined || this.name === 'Error') {
      this.name = this.constructor.name;
    }

    this.message = `Bad response from the server [${status}]`;
    this.details = response.error;
    this.status = status;
    this.statusText = statusText;
  }
}

export class CommunicationError extends Error {
  constructor(message: string, public details: any = null) {
    super(message);

    // Maintains proper stack trace for where our error was thrown
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, this.constructor);
    }

    // Set the prototype explicitly (to use instanceof)
    Object.setPrototypeOf(this, CommunicationError.prototype);

    // Replace Error with ClassName of the constructor
    if (this.name === undefined || this.name === 'Error') {
      this.name = this.constructor.name;
    }

    this.details = details;
  }
}

export class TimeoutError extends CommunicationError {
  constructor(message: string = 'Request Timeout') {
    super(message);

    // Maintains proper stack trace for where our error was thrown
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, this.constructor);
    }

    // Set the prototype explicitly (to use instanceof)
    Object.setPrototypeOf(this, TimeoutError.prototype);

    // Replace Error with ClassName of the constructor
    this.name = this.constructor.name;
  }
}

export class NoConnectionError extends CommunicationError {
  constructor(message: string = 'There is no internet connection') {
    super(message);

    // Maintains proper stack trace for where our error was thrown
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, this.constructor);
    }

    // Set the prototype explicitly (to use instanceof)
    Object.setPrototypeOf(this, NoConnectionError.prototype);

    // Replace Error with ClassName of the constructor
    this.name = this.constructor.name;
  }
}
