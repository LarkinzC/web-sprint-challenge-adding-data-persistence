// build your `/api/tasks` router here
const router = require("express").Router();
const Task = require("./model");

router.get("/", async (req, res, next) => {
  try {
    const data = await Task.fetch();
    const transformedData = data.map((item) => ({
      ...item,
      task_completed: !!item.task_completed,
    }));
    res.json(transformedData);
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const newTask = await Task.insert(req.body);
    const booleanized = {
      ...newTask,
      task_completed: !!newTask.task_completed,
    };
    res.json(booleanized);
  } catch (err) {
    next(err);
  }
});

router.use((err, req, res, next) => {
  //eslint-disable-line
  res.status(500).json({
    customMessage: "something went wrong in task router",
  });
});

module.exports = router;
