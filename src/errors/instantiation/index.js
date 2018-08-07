export default class InstantiationError extends Error {
  constructor(...args) {
    super(...args);
    Error.captureStackTrace(this, InstantiationError);
  }
}
