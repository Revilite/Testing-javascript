const express = require('express');
const routes = require("./routes")
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true}));
app.use(routes);

app.listen(PORT, () =>{
  console.log(`http://localhost:${PORT}`)
})