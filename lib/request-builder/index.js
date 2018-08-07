'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _builder = require('./builder');

var _builder2 = _interopRequireDefault(_builder);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var RequestBuilder = function () {
  function RequestBuilder(url, headers) {
    _classCallCheck(this, RequestBuilder);

    this.BASE_URL = url;

    var builder = new _builder2.default(headers);

    this.buildMethods = {
      'GET': builder.get,
      'POST': builder.post
    };
  }

  _createClass(RequestBuilder, [{
    key: 'build',
    value: function build(url) {
      var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var method = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'GET';

      method = method.toUpperCase();

      return this.buildMethods[method](this.BASE_URL + url, params);
    }
  }]);

  return RequestBuilder;
}();

exports.default = RequestBuilder;