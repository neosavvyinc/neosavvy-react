const Auth = require('./auth.schema');

const User = `
  type User {
    id: String!
    firstName: String!
    lastName: String!
    email: String!,
    createdAt: String!
  }
`;

module.exports = [User, ...Auth];
