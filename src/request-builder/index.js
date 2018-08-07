import Builder from './builder';

export default class RequestBuilder {

  constructor(url, headers) {
      this.BASE_URL = url;

      let builder = Builder.register(headers);

      this.buildMethods = {
        'GET': builder.get.bind(builder),
        'POST': builder.post.bind(builder)
      }
  }

  build(url, params = {}, method = 'GET') {
    method = method.toUpperCase();

    return this.buildMethods[method](this.BASE_URL + url, params);
  }

}
