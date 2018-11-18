'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var pagination = ['limit', 'pagination', 'page', 'pageFor', 'skipToken'];

var sort = ['orderby'];

var search = ['filter'];

var expansions = ['expand'];

var selections = ['select'];

var location = ['location'];

var validParams = [].concat(pagination, sort, search, expansions, selections, location);

exports.default = validParams;