const db = require("../../data/dbConfig");

async function fetch() {
  const projTasks = await db("tasks as t")
    .leftJoin("projects as p", "t.project_id", "p.project_id")
    .select(
      "t.task_id",
      "t.task_notes",
      "t.task_description",
      "t.task_completed",
      "p.project_name",
      "p.project_description"
    );

  return projTasks;
}

async function insert(taskData) {
  try {
    const [insertedId] = await db("tasks").insert(taskData);

    const newTask = await db("tasks").where("task_id", insertedId).first();

    return newTask;
  } catch (error) {
    console.error("Error inserting project:", error);
  }
}

module.exports = { fetch, insert };
