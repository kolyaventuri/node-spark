const pagination = [
  'limit',
  'pagination',
  'page',
  'pageFor',
  'skipToken'
];

const sort = [
  'orderby'
];

const search = [
  'filter'
];

const expansions = [
  'expand'
];

const selections = [
  'select'
];

const location = [
  'location'
];

const validParams = [
  ...pagination,
  ...sort,
  ...search,
  ...expansions,
  ...selections,
  ...location
];

export default validParams;
