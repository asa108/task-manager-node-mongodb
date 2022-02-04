// CRUD create read update delete

const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

const connectionURL = "mongodb://127.0.0.1:27017";
const databaseName = "task-manager";

MongoClient.connect(
  connectionURL,
  { useNewUrlParser: true },
  (error, client) => {
    if (error) {
      return console.log("Unable to connect to database");
    }

    console.log("connected correctly!");

    const db = client.db(databaseName);

    // db.collection("users").insertOne(
    //   {
    //     name: "Asane",
    //     age: 23,
    //   },
    //   (error, result) => {
    //     if (error) {
    //       return console.log("Unable to insert user");
    //     }

    //     console.log(result.ops);
    //   }
    // );

    // db.collection("users").insertMany(
    //   [
    //     { name: "lily", age: 1 },
    //     { name: "happy", age: 41 },
    //   ],
    //   (error, result) => {
    //     if (error) {
    //       return console.log("Unable to insert document!");
    //     }

    //     console.log(result.ops);
    //   }
    // );

    db.collection("tasks").insertMany(
      [
        { description: "To do 1", completed: false },
        { description: "To do 2", completed: true },
      ],
      (error, result) => {
        if (error) {
          return console.log("Unable to insert");
        }
        console.log(result.ops);
      }
    );
  }
);
