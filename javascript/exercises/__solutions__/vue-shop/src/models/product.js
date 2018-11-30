/* eslint-disable import/prefer-default-export */

export class Product {
  constructor(data) {
    if (data) {
      Object.assign(this, data);
    }
  }

  isNew() {
    return !this.id;
  }
}
