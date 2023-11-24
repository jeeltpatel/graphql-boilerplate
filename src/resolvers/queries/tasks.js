const Tasks = require('../../db/models/task');

const tasks = async (parent, args, ctx, info) => {
  return await Tasks.find();
};

module.exports = tasks;