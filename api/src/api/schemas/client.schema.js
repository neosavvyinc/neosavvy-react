const Resource = require('./resource.schema');

const Client = `
  type Client {
    id: String!,
    name: String!,
    createdAt: String!,
    resources: [Resource]
  }
`;

module.exports = [Client, Resource];