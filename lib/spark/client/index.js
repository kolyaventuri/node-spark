'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _connection = require('./connection');

var connection = _interopRequireWildcard(_connection);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Client = function Client(key, secret) {
  _classCallCheck(this, Client);

  this.makeRequest = connection.makeRequest;

  if (!key) {
    throw new Error('No API_KEY provided.');
    return;
  }
  if (!secret) {
    throw new Error('No API_SECRET provided.');
    return;
  }

  connection.assign(key, secret);
};

exports.default = Client;