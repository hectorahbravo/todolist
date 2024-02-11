const { StatusCodes } = require("http-status-codes");
const createError = require("http-errors");

const ToDo = require("../models/ToDo.model");

module.exports.getToDos = (req, res, next) => {
  ToDo.find()
    .then((todos) => {
      res.status(StatusCodes.OK).json(todos);
    })
    .catch(next);
};

module.exports.createToDo = (req, res, next) => {
  ToDo.create(req.body)
    .then((toDo) => {
      res.status(StatusCodes.OK).json(toDo);
    })
    .catch(next);
};
module.exports.toDoDetails = (req, res, next) => {
  ToDo.findById(req.params.id)
    .then((toDo) => {
      res.status(StatusCodes.OK).json(toDo);
    })
    .catch(next);
};

module.exports.editToDo = (req, res, next) => {
  ToDo.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((editedToDo) => {
      res.status(StatusCodes.OK).json(editedToDo);
    })
    .catch(next);
};

module.exports.deleteToDo = (req, res, next) => {
  ToDo.findByIdAndDelete(req.params.id)
    .then((editedToDo) => {
      res.status(StatusCodes.OK).json(editedToDo);
    })
    .catch(next);
};
