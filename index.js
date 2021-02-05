const express = require("express");
const bodyParser = require("body-parser");
const pdfFill = require("pdftk-fill-pdf");
const app = express();
const port = 3000;
const templatePutanja = "template/form.pdf";

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/obrazac.pdf", (req, res) => {
  pdfFill
    .fill({ pdfPath: templatePutanja, data: req.body })
    .then((data) => {
      res.send(data);
    });
});

app.listen(port, () => {
  console.log(`Server pokrenut na http://localhost:${port}`);
});
