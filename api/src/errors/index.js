export class BadRequest extends Error {
  constructor(message) {
    super(message);
    this.status = 400;
  }
}

export class Unauthorized extends Error {
  constructor(message) {
    super(message);
    this.status = 401;
  }
}
