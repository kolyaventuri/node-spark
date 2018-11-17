'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.get = undefined;

var _connection = require('../connection');

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var get = exports.get = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(id) {
    var result;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (id) {
              _context.next = 2;
              break;
            }

            throw new Error('No account ID provided');

          case 2:
            _context.next = 4;
            return (0, _connection.makeRequest)('/accounts/' + id, {});

          case 4:
            result = _context.sent;
            _context.prev = 5;
            return _context.abrupt('return', result.D.Results[0]);

          case 9:
            _context.prev = 9;
            _context.t0 = _context['catch'](5);
            return _context.abrupt('return', result || { success: false });

          case 12:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, undefined, [[5, 9]]);
  }));

  return function get(_x) {
    return _ref.apply(this, arguments);
  };
}();