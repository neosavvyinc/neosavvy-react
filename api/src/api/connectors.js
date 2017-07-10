const mongoose = require('mongoose');
const isEmail = require('validator/lib/isEmail');

const {
  createToken,
  verifyToken,
  encryptPassword,
  comparePassword
} = require('./utils/auth');

const User = require('./models/User');
const Resource = require('./models/Resource');
const Client = require('./models/Client');

const connectors = {
  Auth: {
    signUp(args) {
      return new Promise((resolve, reject) => {
        // Validate the data
        if (!args.email) {
          return reject({
            code: 'email.empty',
            message: 'Email is empty.'
          });
        } else if (!isEmail(args.email)) {
          return reject({
            code: 'email.invalid',
            message: 'You have to provide a valid email.'
          });
        }

        if (!args.password) {
          return reject({
            code: 'password.empty',
            message: 'You have to provide a password.'
          });
        }

        return encryptPassword(args.password, (err, hash) => {
          if (err) {
            return reject(new Error('The password could not be hashed.'));
          }

          return User.create(Object.assign(args, { password: hash }))
            .then((user) => {
              resolve(createToken({ id: user._id, email: user.email }));
            })
            .catch((err2) => {
              if (err2.code === 11000) {
                return reject({
                  code: 'user.exists',
                  message: 'There is already a user with this email.'
                });
              }

              return reject(err2);
            });
        });
      });
    },
    signIn(args) {
      return new Promise((resolve, reject) => {
        // Validate the data
        if (!args.email) {
          return reject({
            code: 'email.empty',
            message: 'Email is empty.'
          });
        } else if (!isEmail(args.email)) {
          return reject({
            code: 'email.invalid',
            message: 'You have to provide a valid email.'
          });
        }

        if (!args.password) {
          return reject({
            code: 'password.empty',
            message: 'You have to provide a password.'
          });
        }

        // Find the user
        return User.findOne({ email: args.email })
          .then((user) => {
            if (!user) {
              return reject({
                code: 'user.not_found',
                message: 'Authentication failed. User not found.'
              });
            }

            return comparePassword(user.password, args.password, (err, isMatch) => {
              if (err) { return reject(err); }
              if (!isMatch) {
                return reject({
                  code: 'password.wrong',
                  message: 'Wrong password.'
                });
              }

              return resolve(createToken({ id: user._id, email: user.email }));
            });
          })
          .catch(err => reject(err));
      });
    },
    isAuthenticated(args) {
      return new Promise((resolve, reject) => {
        if (!args.token) {
          return reject({
            code: 'token.empty',
            message: 'The user token is empty.'
          });
        }

        return verifyToken(args.token, (err, decoded) => {
          if (err) {
            return reject({
              code: 'user.unauthenticated',
              message: 'You must be authenticated.'
            });
          }

          return resolve(decoded);
        });
      });
    }
  },
  User: {
    getUsers() {
      return User.find({});
    }
  },
  Resource: {
    getResources() {
      return Resource.find({});
    },
    createResource(args) {
      return new Promise((resolve, reject) => {
        Resource.create(args)
          .then((resource) => {
            resolve(resource);
          })
          .catch((error) => reject({
            code: 'resource.create',
            message: 'Error creating new Resource'
          }));
      });
    },
    deleteResource(id) {
      return new Promise((resolve, reject) => {
        Resource
          .findOneAndRemove({ _id: id })
          .exec()
          .then(() => resolve({ status: 200, id }))
          .catch(((error) => reject(error)))
      });
    },
  },
  Client: {
    getClients() {
      return Client.find({});
    },
    createClient(args) {
      return new Promise((resolve, reject) => {
        Client.create(args)
          .then((client) => resolve(client))
          .catch((error) => reject({
            code: 'client.create',
            message: 'Error creating new Client'
          }));
      });
    },
    deleteClient(id) {
      return new Promise((resolve, reject) => {
        Client
          .findOneAndRemove({ _id: id })
          .exec()
          .then(() => resolve({ status: 200, id }))
          .catch(((error) => reject(error)))
      });
    },
  }
};

module.exports = connectors;
