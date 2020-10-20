const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

app.use(cors);
app.use(bodyParser.json);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use("/api/adotante", require("./app/routes/adotante.routes"));
app.use("/api/pet", require("./app/routes/pet.routes"));
app.use("/api/ong", require("./app/routes/ong.routes"));

app.listen(3001);