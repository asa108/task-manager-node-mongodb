const mongoose = require("mongoose");
const validator = require('validator')

mongoose.connect("mongodb://127.0.0.1:27017/task-manager-api", {
  useNewUrlParser: true,
  useCreateIndex: true,
});

const User = mongoose.model("User", {
  name: {
    type: String,
    require: true,
    },
    email: {
        type: String,
        require: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error('Email is invalid')
            }
        }
    },
  age: {
      type: Number,
      validate(value) {
          if (value < 0) {
              throw new Error('Age must be a positive number')
          }
      }
  },
});

const me = new User({
    name: "Yu",
    email:'mike@gmail.com'
});

me.save()
  .then(() => {
    console.log(me);
  })
  .catch((error) => {
    console.log("error", error);
  });

// const Task = mongoose.model("Task", {
//   description: {
//     type: String,
//   },
//   completed: {
//     type: Boolean,
//   },
// });

// const task = new Task({
//     description: 'wow',
//     completed:true
// })

// task.save().then(() => {
//     console.log(task)
// }).catch((error) => {
//     console.log('error',error)
// })