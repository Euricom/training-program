class ExtendableError extends Error {
  constructor(...params) {
    super(...params);
    const message =
      params.length > 0 && typeof params[0] === 'string' ? params[0] : '';

    // Replace Error with ClassName of the constructor, if it has not been overwritten already
    if (this.name === undefined || this.name === 'Error') {
      Object.defineProperty(this, 'name', {
        configurable: true,
        enumerable: false,
        value: this.constructor.name,
        writable: true,
      });
    }

    Object.defineProperty(this, 'message', {
      configurable: true,
      enumerable: false,
      value: message,
      writable: true,
    });

    Object.defineProperty(this, 'stack', {
      configurable: true,
      enumerable: false,
      value: '',
      writable: true,
    });

    // Maintains proper stack trace for where our error was thrown (only available on V8)
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, this.constructor);
    } else if (this.stack === '') {
      this.stack = new Error(message).stack;
    }
  }
}

export class RequestError extends ExtendableError {
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
  }
}

export class CommunicationError extends Error {
  constructor(message: string, public details = null) {
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
  }
}
