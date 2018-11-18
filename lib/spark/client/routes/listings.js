'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.search = undefined;

var _connection = require('../connection');

var _transformParams = require('../../../utils/transform-params');

var _transformParams2 = _interopRequireDefault(_transformParams);

var _alphabetize = require('../../../utils/alphabetize');

var _alphabetize2 = _interopRequireDefault(_alphabetize);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var setupParams = function setupParams(params) {
  params = (0, _transformParams2.default)(params);
  return (0, _alphabetize2.default)(params);
};

var search = exports.search = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var result;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            params = setupParams(params);

            _context.next = 3;
            return (0, _connection.makeRequest)('/listings', params);

          case 3:
            result = _context.sent;
            _context.prev = 4;
            return _context.abrupt('return', result.D.Results);

          case 8:
            _context.prev = 8;
            _context.t0 = _context['catch'](4);
            return _context.abrupt('return', result || { success: false });

          case 11:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, undefined, [[4, 8]]);
  }));

  return function search() {
    return _ref.apply(this, arguments);
  };
}();