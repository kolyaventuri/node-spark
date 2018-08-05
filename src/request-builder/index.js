import builder from './builder';

const build = {
  'GET': builder.get,
  'POST': builder.post
};

export default class RequestBuilder {

  constructor(url, headers) {
      this.BASE_URL = url;
      this.HEADERS = headers;

      builder.setHeaders(headers);
  }

  build(url, params, method = 'GET') {
    method = method.toUpperCase();

    return build[method](this.BASE_URL + url, params);
  }

}
