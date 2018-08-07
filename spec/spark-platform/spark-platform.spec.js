import SparkPlatform from '../../src';
import { InstantiationError } from '../../src/errors';

describe('SparkPlatform', () => {
  xit('can be created by instantiating new SparkPlatform.client()', () => {

  });

  it('cannot be instantiated directly', () => {
    let instance = () => {
      return new SparkPlatform();
    };

    expect(instance).to.throw(InstantiationError);
  });
});
