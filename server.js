const express = require("express");
const routes = require("./routes");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3001;
const app = express();

// Set up middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Connect to MongoDB Cloud Atlas or local mongoDB
mongoose.connect(
    process.env.MONGODB_URL || "mongodb://localhost/googlebooks",
  {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true
  },
  
  () =>
    console.log("connected to DB!")
  );
// Define API routes here
app.use(routes)


app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});