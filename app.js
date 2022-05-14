const express = require("express");
const exphbs = require("express-handlebars");
const app = express();


// Constantes do App
const conn = require("./Database/connMongo");
app.engine("handlebars", exphbs());
app.set("view engine", "handlebars");

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.get('/', (req, res) => {

  res.send('<h1>Conectado ao Mongo DB</h1>')
})

console.log(conn);
app.listen(3000)

app.use(express.json());