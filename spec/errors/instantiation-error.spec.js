import { InstantiationError } from '../../src/errors';

describe('InstantiationError', () => {
  it('should function as an error', () => {
    let invoke = () => {
      throw new InstantiationError();
    };

    expect(invoke).to.throw(InstantiationError);
  });
});
