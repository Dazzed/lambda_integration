const { handler } = require('./handler');
const input = {
  body: '{\n\t"username":"admin",\n\t"email":"admin@example.com",\n\t"password":"abcd1234"\n}',
};
describe('handler', () => {
  test('the handler function should work', () => {
    handler(input, {}, (err, response) => {
      expect(err).toBeNull();
      expect(response).toBeDefined();
    });
  });
  test('the response should be successful', () => {
    handler(input, {}, (err, response) => {
      expect(response.statusCode).toEqual(200);
    });
  });
});