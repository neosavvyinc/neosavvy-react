const { makeExecutableSchema } = require('graphql-tools');
const resolvers = require('./resolvers');

const Auth = require('./schemas/auth.schema');
const User = require('./schemas/user.schema');
const Client = require('./schemas/client.schema');
const Resource = require('./schemas/resource.schema');

const Schema = `
  type Query {
    users: [User]!,
    clients: [Client]!,
    resources: [Resource]!
  }

  type DeletedResource {
    status: Int!,
    id: Int!
  }

  type Mutation {
    signUp(firstName: String!, lastName: String!, email: String!, password: String!): Auth
    signIn(email: String!, password: String!): Auth,

    createResource(
      firstName: String!,
      lastName: String!,
      contractType: ContractType!,
      positionRole: PositionRoleType,
      positionLevel: PositionLevelType,
      salary: Float!
    ): Resource,
    deleteResource(id: String!): DeletedResource,

    createClient(name: String!): Client,
    deleteClient(id: String!): DeletedResource,
  }

  schema {
    query: Query,
    mutation: Mutation
  }
`;

module.exports = makeExecutableSchema({
  typeDefs: [
    Schema,
    ...Auth,
    ...User,
    ...Client,
    Resource
  ],
  resolvers
});
