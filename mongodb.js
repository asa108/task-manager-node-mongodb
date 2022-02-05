// CRUD create read update delete

// const mongodb = require("mongodb");
// const MongoClient = mongodb.MongoClient;
// const ObjectID = mongodb.ObjectID;

const { MongoClient, ObjectID } = require("mongodb");

const connectionURL = "mongodb://127.0.0.1:27017";
const databaseName = "task-manager";

MongoClient.connect(
  connectionURL,
  { useNewUrlParser: true },
  (error, client) => {
    if (error) {
      return console.log("Unable to connect to database");
    }
    const db = client.db(databaseName);

    // db.collection("users").findOne(
    //   { _id: new ObjectID("61fd8f7c53592b2f50f2271f") },
    //   (error, user) => {
    //     if (error) {
    //       return console.log("Unable to find");
    //     }

    //     console.log(user);
    //   }
    // );

    // db.collection("users")
    //   .find({ age: 23 })
    //   .toArray((error, users) => {
    //     console.log(users);
    //   });

    // show how many object match
    // db.collection("users")
    //   .find({ age: 23 })
    //   .count((error, users) => {
    //     console.log(users);
    //   });

    db.collection("tasks").findOne(
      {
        _id: new ObjectID("61fd919b16e84b2fdb77d2d7"),
      },
      (error, task) => {
        console.log(task);
      }
    );

    db.collection("tasks")
      .find({ completed: false })
      .toArray((error, tasks) => {
        console.log(tasks);
      });
  }
);
