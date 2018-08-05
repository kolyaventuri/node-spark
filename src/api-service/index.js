import RequestBuilder from '../request-builder';

import request from 'request-promise';

export default class APIService {
  constructor(url, headers = {}) {
    this.builder = new RequestBuilder(url, headers);
  }

  async get(url, paramters = {}) {
    let opts = this.builder.build(url, parameters);

    return await request(opts);
  }

  async post(url, body = {}) {
    let opts = this.builder.build(url, body, 'POST');

    return await request(opts);
  }
}
