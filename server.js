const express = require("express");
const routes = require("./routes");

const PORT = process.env.PORT || 3001;
const app = express();

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Define API routes here
app.use(routes)


app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});