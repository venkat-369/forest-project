const express = require("express");
const path = require("path");

const app = express();
const PORT = 369;

// serve static files
app.use(express.static(path.join(__dirname, "public")));

app.listen(PORT, () => {
  console.log(`🌳 Forest site running on http://localhost:${PORT}`);
});
