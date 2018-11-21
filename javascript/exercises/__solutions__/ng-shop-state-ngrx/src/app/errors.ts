export class RequestError extends Error {
  details: any;
  constructor(
    public status: number,
    public statusText: string,
    response?: any,
  ) {
    super();
    this.name = RequestError.name;
    this.message = `${statusText} [${status}]`;
    this.details = response.error;
  }
}

export class TimeoutError extends Error {
  constructor(message: string = 'Request timeout', public details = null) {
    super(message);
    this.name = TimeoutError.name;
  }
}

export class NoConnectionError extends Error {
  constructor(
    message: string = 'No internet connection',
    public details = null,
  ) {
    super(message);
    this.name = NoConnectionError.name;
  }
}

export class CommunicationError extends Error {
  constructor(message: string, public details: any = null) {
    super(message);
    this.name = CommunicationError.name;
  }
}
