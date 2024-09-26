import mongoose from "mongoose";

const dbConnection = () => {
  mongoose
    .connect(process.env.DATABASECONNECTION)
    .then(console.log("database connected well"))
    .catch((err) => {
      console.log("error" + err);
    });
};

export default dbConnection;
