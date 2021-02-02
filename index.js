const express = require("express");
const fillPdf = require("fill-pdf");
const bodyParser = require("body-parser");
const app = express();

const port = 3000;
const putanja = "../../template/form.pdf";

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Server radi!");
});

app.post("/obrazac.pdf", (req, res) => {
  console.log(req.body);
  fillPdf.generatePdf(req.body, putanja, (err, output) => {
    if (!err) {
      res.type("application/pdf");
      res.send(output);
    } else {
      console.log(err);
    }
  });
});

app.listen(port, () => {
  console.log(`Server pokrenut na http://localhost:${port}`);
});
