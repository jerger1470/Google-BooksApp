const express = require("express");
const routes = require("./routes");
const mongoose = require("mongoose");
const cors = require("cors");
const PORT = process.env.PORT || 3001;
const app = express();
require("dotenv/config");

// Set up middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const db = process.env.MONGODB_URL;

const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useUnifiedTopology: true,
      useNewUrlParser: true
    });
    console.log("MongoDB is Connected...");
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};
connectDB()

// cors origin URL - Allow inbound traffic from origin
corsOptions = {
  origin: "Your FrontEnd Website URL",
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
};
app.use(cors(corsOptions));

  // Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Define API routes here
app.use(routes)


app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});