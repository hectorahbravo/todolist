const mongoose = require("mongoose");

const ToDoSchema = mongoose.Schema(
  {
    task: {
      type: String,
      required: [true, "required field"],
    },
    status: {
      type: String,
      enum: ["not done", "in progress", "blocked", "done"],
    },
  },
  {
    timestamps: true,
    virtuals: true,
    toJSON: {
      virtuals: true,
      transform: (_, ret) => {
        ret.id = ret._id;
        delete ret._id;
        delete ret.__v;
      },
    },
  }
);
const ToDo = mongoose.model("ToDo", ToDoSchema);

module.exports = ToDo;
