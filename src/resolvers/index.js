const users = require('./queries/users');
const hello = require('./queries/hello');
const tasks = require('./queries/tasks');
const createuser = require('./mutations/createuser');
const loginuser = require('./mutations/loginuser');
const createtask = require('./mutations/createtask');
const counter = require('./subscriptions/counter');

const Queries = {
  users,
  hello,
  tasks
};

const Mutations = {
  createuser,
  loginuser,
  createtask
};

const Subscriptions = {
  counter: {
    subscribe: counter
  }
};

module.exports = {
  Query: Queries,
  Mutation: Mutations,
  Subscription: Subscriptions
};
