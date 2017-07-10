const connectors = require('../connectors');

const resolvers = {
  Query: {
    users() {
      return connectors.User.getUsers()
        .then((users) => {
          return users.map((user) => {
            return {
              id: user._id,
              firstName: user.firstName,
              lastName: user.lastName,
              email: user.email
            };
          });
        })
        .catch((err) => {
          throw new Error(err);
        });
    },
    resources() {
      return connectors.Resource.getResources()
        .then((resources) => {
          return resources.map((resource) => {
            return {
              id: resource._id,
              firstName: resource.firstName,
              lastName: resource.lastName,
              contractType: resource.contractType,
              positionRole: resource.positionRole,
              positionLevel: resource.positionLevel,
              salary: resource.salary
            };
          });
        })
        .catch((err) => {
          throw new Error(err);
        });
    },
    clients() {
      return connectors.Client.getClients()
        .then((clients) => {
          return clients.map((client) => {
            return {
              id: client._id,
              name: client.name
            };
          });
        })
        .catch((err) => {
          throw new Error(err);
        });
    }
  },
  Mutation: {
    signUp(root, args) {
      const errors = [];

      return connectors.Auth.signUp(args)
        .then(token => ({
          token,
          errors
        }))
        .catch((err) => {
          if (err.code && err.message) {
            errors.push({
              key: err.code,
              value: err.message
            });
            return { token: null, errors };
          }

          throw new Error(err);
        });
    },
    signIn(root, args) {
      const errors = [];

      return connectors.Auth.signIn(args)
        .then(token => ({
          token,
          errors
        }))
        .catch((err) => {
          if (err.code && err.message) {
            errors.push({
              key: err.code,
              value: err.message
            });

            return { token: null, errors };
          }

          throw new Error(err);
        });
    },
    createResource(root, args) {
      return connectors.Resource.createResource(args)
        .then((resource) => {
          return {
            id: resource._id,
            firstName: resource.firstName,
            lastName: resource.lastName,
            contractType: resource.contractType,
            positionRole: resource.positionRole,
            positionLevel: resource.positionLevel,
            salary: resource.salary,
            createdAt: resource.createdAt,
            joinedAt: resource.joinedAt,
            leftAt: resource.leftAt,
          };
        })
        .catch((err) => {
          throw new Error(err);
        });
    },
    deleteResource(root, args) {
      const { id } = args;
      return connectors.Resource.deleteResource(id)
        .then(() => ({ status: 200 }))
        .catch((err) => {
          throw new Error(err);
        });
    },
    createClient(root, args) {
      return connectors.Client.createClient(args)
        .then((client) => {
          return {
            id: client._id,
            name: client.name,
            createdAt: client.createdAt,
            resources: client.resources
          };
        })
        .catch((err) => {
          throw new Error(err);
        });
    },
    deleteClient(root, args) {
      const { id } = args;
      return connectors.Client.deleteClient(id)
        .then(() => ({ status: 200 }))
        .catch((err) => {
          throw new Error(err);
        });
    }
  }
};

module.exports = resolvers;
