import SparkPlatform from '../../src';
import Client from '../../src/spark/client';

describe('SparkPlatform', () => {
  it('can be created by instantiating new SparkPlatform.client()', () => {
    let instance = new SparkPlatform.client();

    expect(instance).to.be.an.instanceOf(Client);
  });

  it('cannot be instantiated directly', () => {
    let instance = () => {
      return new SparkPlatform();
    };

    expect(instance).to.throw('You cannot instantiate the SparkPlatform directly. Please use `new SparkPlatform.client()` instead.');
  });
});
