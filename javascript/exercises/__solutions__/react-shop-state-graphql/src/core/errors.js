export class RequestError extends Error {
  constructor(response, url) {
    super(`Bad server response [${response.status}]`);
    Error.captureStackTrace(this, RequestError);
    this.status = response.status;
    this.data = response.data;
    this.headers = response.headers;
    this.url = url;
  }
}

export class NoConnectionError extends Error {
  constructor() {
    super('Connection to the server failed');
    Error.captureStackTrace(this, NoConnectionError);
  }
}
