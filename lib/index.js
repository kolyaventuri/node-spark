'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

require('babel-polyfill');

var _client = require('./spark/client');

var _client2 = _interopRequireDefault(_client);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SparkPlatform = function SparkPlatform() {
  _classCallCheck(this, SparkPlatform);

  throw new Error('You cannot instantiate the SparkPlatform directly. Please use `new SparkPlatform.client()` instead.');
};

SparkPlatform.client = _client2.default;
exports.default = SparkPlatform;