const app = require("./app");
const dotenv = require("dotenv");
const {
  ab,
  createCollection,
  removeCollection,
  insertDocument,
  deleteDocument,
} = require("./Query.js");
ab(5, 55);
createCollection("test");

dotenv.config({ path: "./config.env" });

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
