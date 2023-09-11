const app = require("./app");
const dotenv = require("dotenv");

dotenv.config({ path: "./config.env" });

const PORT = 5500;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
