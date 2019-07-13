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

  it('can get an array of profiles with GET', () => {
    return request(app)
      .get('/api/v1/profiles')
      .then(res => {
        expect(res.body).toEqual([{
          name: 'Dirt',
          favoriteCharacter: 'Bender',
          tagline: expect.any(String)
        }]);
      });
  });

  it('can get a profile by index', () => {
    return request(app)
      .get('/api/v1/profiles/0')
      .then(res => {
        expect(res.body).toEqual({
          name: 'Dirt',
          favoriteCharacter: 'Bender',
          tagline: expect.any(String)
        });
      });
  });

  it('can update a profile with PATCH', () => {
    return request(app)
      .patch('/api/v1/profiles/0')
      .send({ favoriteCharacter: 'Fry' })
      .then(res => {
        expect(res.body).toEqual({
          name: 'Dirt',
          favoriteCharacter: 'Fry',
          tagline: expect.any(String)
        });
      });
  });

  it('can delete an profile by index', () => {
    return request(app)
      .delete('/api/v1/profiles/0')
      .then(res => {
        expect(res.body).toEqual({
          name: 'Dirt',
          favoriteCharacter: 'Fry',
          tagline: expect.any(String)
        });
      });
  });

});
