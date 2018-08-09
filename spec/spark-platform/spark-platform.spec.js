import SparkPlatform from '../../src';
import Client from '../../src/spark/client';
import { InstantiationError } from '../../src/errors';

describe('SparkPlatform', () => {
  xit('can be created by instantiating new SparkPlatform.client()', () => {
    let instance = new SparkPlatform.client();

    expect(instance).to.be.a(Client);
  });

  it('cannot be instantiated directly', () => {
    let instance = () => {
      return new SparkPlatform();
    };

    expect(instance).to.throw(InstantiationError, 'You cannot instantiate the SparkPlatform directly. Please use `new SparkPlatform.client()` instead.');
  });
});
