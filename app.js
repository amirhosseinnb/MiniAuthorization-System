const express = require("express");
const { notFoundError, errorHandler } = require("./utils/error-handling");
const { AllRouters } = require("./router/index.routes");
const { default: mongoose } = require("mongoose");
const app = express();
mongoose.connect("mongodb://127.0.0.1:27017/authorization",{}).then(() =>{
  console.log("connected to Mongodb");
})
.catch((err) => console.log(err.message))
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(AllRouters);
app.use(notFoundError);
app.use(errorHandler);
app.listen(3000, () => {
  console.log("server run on port 3000 : http://localhost:3000");
});
