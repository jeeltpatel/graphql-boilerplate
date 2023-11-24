const Tasks = require("../../db/models/task");

const createtask = async (parent, args, ctx, info) => {
  const { task, summary, priority, state } = args.data;


  const taskTaken = await Tasks.findOne({task: task});

  if (taskTaken) throw new Error('Task is Already Taken');
  const taskList = new Tasks({
    task: task,
    summary: summary,
    priority: priority,
    state: state,
  });

  await taskList.save();

  return taskList;
};

module.exports = createtask;