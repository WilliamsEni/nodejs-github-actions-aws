const express = require("express");

const app = express();
const port = process.env.PORT || 8080;

app.get("/", (req, res) => {
  res.send(`
    <h1>Github Actions Auto Deployment Successful!</h1>
    <p>This application was automatically deployed using GitHub Actions.</p>
  `);
});

app.listen(port, "0.0.0.0", () => {
  console.log(`App running on http://localhost:${port}`);
});
