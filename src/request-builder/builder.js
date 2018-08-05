import querystring from 'querystring';

let TEMPLATE = {
  uri: '',
  headers: {},
  json: true
};

const frameworkRequest = (uri) => {
  return Object.assign({ uri }, TEMPLATE);
}

export default {
  get: (url, params) => {
    let query = `?${querystring.stringify(params)}`;
    let framework = frameworkRequest(url + query);

    return Object.assign({
      method: 'GET'
    }, framework);
  },

  post: (url, body) => {
    let framework = frameworkRequest(url, body);

    return Object.assign({
      method: 'POST',
      body
    }, framework);
  },

  setHeaders: (headers) => {
    TEMPLATE = Object.assign({ headers }, TEMPLATE);
    console.log(TEMPLATE)
  }
}
