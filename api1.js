const express = require('express')
const app = express()
const cors = require('cors');
const xlsx = require("xlsx");
const PORT = process.env.PORT || 3030; 

app.use(cors());

app.get('/stu', function (req, res) {   
    let wb = xlsx.readFile("student.xlsx");
    let ws = wb.Sheets["Sheet1"];
    let data = xlsx.utils.sheet_to_json(ws);
  res.send(data)
})
app.listen(PORT)