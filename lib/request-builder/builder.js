'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _querystring = require('querystring');

var _querystring2 = _interopRequireDefault(_querystring);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Builder = function Builder(headers) {
  var _this = this;

  _classCallCheck(this, Builder);

  this.get = function (url, params) {
    var query = '?' + _querystring2.default.stringify(params);

    var framework = Object.assign(_this.TEMPLATE, { uri: url + query });

    return Object.assign({
      method: 'GET'
    }, framework);
  };

  this.post = function (url, body) {
    var framework = Object.assign(_this.TEMPLATE, { uri: url });

    return Object.assign({
      method: 'POST',
      body: body
    }, framework);
  };

  this.TEMPLATE = {
    uri: '',
    headers: headers,
    json: true
  };
};

exports.default = Builder;