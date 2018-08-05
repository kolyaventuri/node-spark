import querystring from 'querystring';
import builder from './builder';

const build = {
  'GET': builder.getRequest,
  'POST': builder.postRequest
};

export default class RequestBuilder {

  constructor(url, headers) {
      this.BASE_URL = url;
      this.HEADERS = headers;
  }

  build(url, params, method = 'GET') {
    method = method.toUpperCase();

    return build[method](url, params);
  }

}
