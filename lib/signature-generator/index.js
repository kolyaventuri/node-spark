'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _crypto = require('crypto');

var _crypto2 = _interopRequireDefault(_crypto);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var stringifyParams = function stringifyParams(params) {
  var paramKeys = Object.keys(params);
  paramKeys.sort(); // SparkPlatform requires parameters to be alphabetical

  var string = '';

  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = paramKeys[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var key = _step.value;

      if (Array.isArray(params[key])) {
        params[key] = params[key].join(',');
      }
      string += '' + key + params[key];
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  return string;
};

var SignatureGenerator = function () {
  function SignatureGenerator(key, secret) {
    _classCallCheck(this, SignatureGenerator);

    this.secret = secret;
    this.key = key;
  }

  _createClass(SignatureGenerator, [{
    key: 'generate',
    value: function generate(endpoint, params, token) {
      params = params || {};

      var paramString = stringifyParams(params);
      var signature = this.secret + 'ApiKey' + this.key + 'ServicePath/v1' + endpoint + 'AuthToken' + token + paramString;
      var hash = _crypto2.default.createHash('md5').update(signature).digest('hex');

      return hash;
    }
  }]);

  return SignatureGenerator;
}();

exports.default = SignatureGenerator;