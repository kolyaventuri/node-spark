import RequestBuilder from '../../src/request-builder';

describe('Request Builder', () => {
  let builder = new RequestBuilder('AURL', {h: 1});

  it('builds GET request object', () => {
    let result = builder.build('/end', { q:2 });

    expect(result).to.eql({
      uri: 'AURL/end?q=2',
      headers: {
        h: 1
      },
      json: true
    });
  });

  it('builds POST request object', () => {
    let result = builder.build('/end', { q:2 }, 'POST');

    expect(result).to.eql({
      method: 'POST',
      uri: 'AURL/end',
      headers: {
        h: 1
      },
      body: {
        q: 2
      },
      json: true
    });
  });
});
