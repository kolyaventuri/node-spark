import Builder from '../../src/request-builder/builder';

const headers = { h: 1 };

describe('Builder', () => {
  describe('.get()', () => {
    it('should craft a get request', () => {
      let builder = new Builder(headers);

      let result = builder.get('AURL/url', { q: 2, b: 3 });

      expect(result).to.be.an('object')
        .that.has.property('uri')
        .that.equals('AURL/url?b=3&q=2');

      expect(result).to.have.property('headers')
        .that.eqls(headers);

      expect(result).to.have.property('json')
        .that.is.true;

      expect(result).to.have.property('method')
        .that.eqls('GET');
    });
  });

  describe('.post()', () => {
    it('should craft a post request', () => {
      let builder = new Builder(headers);
      let body = { q: 2, b: 3 };

      let result = builder.post('AURL/url', body);

      expect(result).to.be.an('object')
        .that.has.property('uri')
        .that.equals('AURL/url');

      expect(result).to.have.property('headers')
        .that.eqls(headers);

      expect(result).to.have.property('body')
        .that.eqls(body);

      expect(result).to.have.property('json')
        .that.is.true;

      expect(result).to.have.property('method')
        .that.eqls('POST');
    });
  });
});
