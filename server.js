const express = require("express");
const cors = require('cors')
const app = express();
const path = require("path");
const PORT = process.env.PORT || 3555;

app.use(cors())

app.use(express.static(path.join(__dirname, "./client")));

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/index.html'), (err) => {
    if (err) {
      res.status(500).send(err);
    }
  });
});

app.listen(PORT, () => {
  console.log(`server is running and listening on port ${PORT}`);
});
