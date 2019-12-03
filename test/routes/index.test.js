const request = require('supertest');
const app = require('../../app');

describe('Test the root path', () => {
    it('should response the GET method', () => {
        return request(app).get('/').expect(200);
    });
});