const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const mongoose = require("mongoose");

require("dotenv").config();

// Schema
const schema = require("./schema/schema");

mongoose
  .connect(process.env.MONGO_URI_DEV, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to mongodb"))
  .catch((err) => console.log(err));

const app = express();

app.use(
  "/api/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

app.listen(4000, () => {
  console.log("now listening for requests on port 4000");
});
22;
