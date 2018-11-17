import * as connection from './connection';
import * as accounts from './routes/accounts'

export default class Client {
  constructor(key, secret) {
    if (!key) {
      throw new Error('No API_KEY provided.');
      return;
    }
    if (!secret) {
      throw new Error('No API_SECRET provided.');
      return;
    }

    connection.assign(key, secret);
  }

  accounts = accounts
}
