exports.handler = (event, context, callback) => {
  try {
    const body = JSON.parse(event.body);
    if (!body.email || !body.username || !body.password) {
      const error = "Invalid Body";
      throw new Error({ error });
    }
    const response = { statusCode: 200, body };
    return callback(null, response);
  } catch (error) {
    const response = { statusCode: 500, error };
    return callback(null, response);
  }
};