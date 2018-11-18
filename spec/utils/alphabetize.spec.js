import alphabetize from '../../src/utils/alphabetize';

describe('#alphabetize', () => {
  it('should alphabetize a list of parameters', () => {
    const input = {
      c: '3',
      a: '1',
      b: '2'
    };

    const expected = {
      a: '1',
      b: '2',
      c: '3'
    };

    const result = alphabetize(input);

    expect(JSON.stringify(result)).to.equal(JSON.stringify(expected));
  });
});
