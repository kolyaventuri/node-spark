'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeRequest = exports.assign = undefined;

var _constants = require('../constants');

var _apiService = require('../../api-service');

var _apiService2 = _interopRequireDefault(_apiService);

var _tokenGenerator = require('../../token-generator');

var _tokenGenerator2 = _interopRequireDefault(_tokenGenerator);

var _signatureGenerator = require('../../signature-generator');

var _signatureGenerator2 = _interopRequireDefault(_signatureGenerator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var key = void 0,
    secret = void 0;
var apiService = void 0;

var assign = exports.assign = function assign(_key, _secret) {
  key = _key;
  secret = _secret;
  apiService = new _apiService2.default(_constants.API_URL, _constants.DEFAULT_HEADERS);
};

var makeRequest = exports.makeRequest = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(url, params) {
    var credentials, tokenGenerator, signatureGenerator, token, signature;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            credentials = [key, secret];
            tokenGenerator = new (Function.prototype.bind.apply(_tokenGenerator2.default, [null].concat(credentials)))();
            signatureGenerator = new (Function.prototype.bind.apply(_signatureGenerator2.default, [null].concat(credentials)))();
            _context.next = 5;
            return tokenGenerator.getToken();

          case 5:
            token = _context.sent;
            signature = signatureGenerator.generate(url, params, token.token);


            params['ApiSig'] = signature;
            params['AuthToken'] = token.token;

            _context.next = 11;
            return apiService.get(url, params);

          case 11:
            return _context.abrupt('return', _context.sent);

          case 12:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, undefined);
  }));

  return function makeRequest(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();