import APIService from '../../src/api-service';

describe('APIService', () => {
  const API = new APIService('https://jsonplaceholder.typicode.com', {});

  it('makes a get request', async () => {
    const result = await API.get('/posts/1');

    expect(result).to.be.an('object');
  });

  it('makes a post request', async () => {
    const data = {
      title: 'foo',
      body: 'bar'
    };

    const result = await API.post('/posts', data);

    expect(result).to.be.an('object')
      .that.has.property('title')
      .that.eqls(data.title);
  });
});
