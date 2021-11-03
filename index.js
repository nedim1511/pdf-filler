var cors = require("cors");

const express = require("express");
const bodyParser = require("body-parser");
const pdfFill = require("pdftk-fill-pdf");
const app = express();
const port = 3000;
const templatePutanja = "template/form.pdf";
const templatePutanjaRS = "template/formRS.pdf";


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.post("/", (req, res) => {
  pdfFill
    .fill({ pdfPath: templatePutanja, data: req.body })
    .then((data) => {
      res.send(data);
    }).catch((error) => {
      res.send(error);
    });
});

app.post("/rs", (req, res) => {
  pdfFill
    .fill({ pdfPath: templatePutanjaRS, data: req.body })
    .then((data) => {
      res.send(data);
    }).catch((error)=>{
            res.send(error);
    })
});


app.get("/hello", (req, res) => {
  res.send("hello world");
});


app.listen(port, () => {
  console.log(`Server pokrenut na http://localhost:${port}`);
});
