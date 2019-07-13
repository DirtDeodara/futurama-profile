const request = require('supertest');

const app = require('../lib/app');

describe('futurama tests', () => {
  it('can create a profile with POST', () => {
    return request(app)
      .post('/api/v1/profiles')
      .send({ name: 'Dirt', favoriteCharacter: 'Bender' })
      .then(res => {
        expect(res.body).toEqual({
          name: 'Dirt',
          favoriteCharacter: 'Bender',
          tagline: expect.any(String)
        });
      });
  });

});
