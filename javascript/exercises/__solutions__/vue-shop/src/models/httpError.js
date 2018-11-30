/* eslint-disable no-unused-vars */
import status from 'http-status';

export class ServerError extends Error {
  details;

  constructor(statusCode, statusCodeText, error) {
    super();

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, this.constructor);
    }

    Object.setPrototypeOf(this, ServerError.prototype);

    if (this.name === undefined || this.name === 'Error') {
      this.name = this.constructor.name;
    }

    this.message = `Something bad happened on the server, if this problem persists then please contact the administrator.`;
    this.details = error;
  }
}

export class NoConnectionError extends Error {
  constructor(message = 'Internet connection offline or interrupted.') {
    super(message);

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, this.constructor);
    }

    Object.setPrototypeOf(this, NoConnectionError.prototype);

    if (this.name === undefined || this.name === 'Error') {
      this.name = this.constructor.name;
    }
  }
}

export class ClientError extends Error {
  details;

  constructor(statusCode, statusCodeText, error) {
    super();

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, this.constructor);
    }

    Object.setPrototypeOf(this, ClientError.prototype);

    if (this.name === undefined || this.name === 'Error') {
      this.name = this.constructor.name;
    }

    this.message = `Something went wrong, please try again.`;
    this.details = error;
  }
}
