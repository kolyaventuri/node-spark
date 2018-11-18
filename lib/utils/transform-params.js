'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _validParams = require('../spark/constants/valid-params');

var _validParams2 = _interopRequireDefault(_validParams);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (params) {
  var keys = Object.keys(params);

  var newParamsObject = {};
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = keys[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var key = _step.value;

      var newKey = key;
      if (_validParams2.default.indexOf(key) > -1) {
        newKey = '_' + key;
      }

      newParamsObject[newKey] = params[key];
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

  return newParamsObject;
};