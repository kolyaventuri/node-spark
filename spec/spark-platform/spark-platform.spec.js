import SparkPlatform from '../../src';
import Client from '../../src/spark/client';

describe('SparkPlatform', () => {
  it('can be created by instantiating new SparkPlatform.client()', () => {
    let instance = new SparkPlatform.client('a', 'b');

    expect(instance).to.be.an.instanceOf(Client);
  });

  it('cannot be instantiated directly', () => {
    let instance = () => {
      return new SparkPlatform();
    };

    expect(instance).to.throw('You cannot instantiate the SparkPlatform directly. Please use `new SparkPlatform.client()` instead.');
  });

  it('cannot be instantiated without an API_KEY', () => {
    let instance = () => {
      return new SparkPlatform.client(null, 'b');
    };

    expect(instance).to.throw('No API_KEY provided.');
  });

  it('cannot be instantiated without an API_SECRET', () => {
    let instance = () => {
      return new SparkPlatform.client('a');
    };

    expect(instance).to.throw('No API_SECRET provided.');
  })
});
