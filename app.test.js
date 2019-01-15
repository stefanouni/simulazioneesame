const request = require('supertest');
const app = require('./app');

test('GET /?string=somestring should return 200', async () => {
    const response = await request(app).get('/square?string=' + 'abcd');
    expect(response.statusCode).toBe(200);
    expect(response.body.result).toBe(16)
});
