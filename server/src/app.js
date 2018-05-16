const express = require("express");
const graphqlHTTP = require("express-graphql");
const cors = require("cors");

const schema = require("./schema/schema");
const mongoose = require("mongoose");

const app = new express();
app.use(cors());

// TODO: Use ypur own url, user and pass
mongoose.connect("mongodb://jjreina:1234@ds219100.mlab.com:19100/gql-books");
mongoose.connection.once('open', () => {
    console.log('Connected to DB');
});

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}));

app.listen(4000, () => {
    console.log('Listening for requests on port 4000');
});
