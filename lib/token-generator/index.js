'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _requestPromise = require('request-promise');

var _requestPromise2 = _interopRequireDefault(_requestPromise);

var _crypto = require('crypto');

var _crypto2 = _interopRequireDefault(_crypto);

var _apiService = require('../api-service');

var _apiService2 = _interopRequireDefault(_apiService);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var HEADERS = {
  'User-Agent': 'Venturi Group Albuquerque',
  'X-SparkApi-User-Agent': 'Venturi Group Albuquerque'
};

var API = new _apiService2.default('https://sparkapi.com/v1', HEADERS);

var TokenGenerator = function () {
  function TokenGenerator(key, secret) {
    _classCallCheck(this, TokenGenerator);

    this.key = key;
    this.secret = secret;

    this.API_SIG = _crypto2.default.createHash('md5').update(secret + "ApiKey" + key).digest("hex");

    this.token = { expires: new Date(0) };
  }

  _createClass(TokenGenerator, [{
    key: 'getToken',
    value: function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var result;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!(this.token.expires > new Date())) {
                  _context.next = 2;
                  break;
                }

                return _context.abrupt('return', this.token);

              case 2:
                _context.next = 4;
                return API.post('/session', { ApiKey: this.key, ApiSig: this.API_SIG });

              case 4:
                result = _context.sent;

                if (result['D'].Success) {
                  _context.next = 7;
                  break;
                }

                throw new Error('Something went wrong authorizing application.');

              case 7:

                this.token = {
                  token: result.D.Results[0].AuthToken,
                  expires: new Date(result.D.Results[0].Expires)
                };

                return _context.abrupt('return', this.token);

              case 9:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getToken() {
        return _ref.apply(this, arguments);
      }

      return getToken;
    }()
  }]);

  return TokenGenerator;
}();

exports.default = TokenGenerator;