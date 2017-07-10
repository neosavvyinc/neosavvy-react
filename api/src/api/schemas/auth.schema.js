const Error = require('./error.schema');

const Auth = `
  type Auth {
    token: String
    errors: [Error]
  }
`;

module.exports = [Auth, Error];
