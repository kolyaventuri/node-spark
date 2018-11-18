import transformParams from '../../src/utils/transform-params';

describe('#transformParams', () => {
  it('should transform valid params', () => {
    const params = {
      filter: 'ABC',
      select: 'DEF',
      invalid: 'GHI'
    };

    const expected = {
      _filter: 'ABC',
      _select: 'DEF',
      invalid: 'GHI'
    };

    const result = transformParams(params);

    expect(result).to.deep.equal(expected);
  });
});
