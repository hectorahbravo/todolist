const router = require("express").Router();
const toDosController = require("../controllers/toDos.controller");

router.get("/", (req, res, next) => res.json({ ok: true }));

router.get("/todos", toDosController.getToDos);
router.post("/todos/new", toDosController.createToDo);
router.put("/todos/:id", toDosController.editToDo);
router.delete("/todos/:id", toDosController.deleteToDo);
router.get("/todos/:id", toDosController.toDoDetails);

module.exports = router;
