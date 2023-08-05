const express = require("express");
const cors = require("cors");
const app = express();
const port = 8000;

const dotenv = require("dotenv");
const userRoute = require("./Routes/userRoute");
const postRoute = require("./Routes/postRoute");
dotenv.config({ path: "./.env" });
require("./Models/userModel");
require("./Models/postModel");
require("./Connection");

app.use(cors());
app.use(express.json());
app.use("/user", userRoute);
app.use("/post", postRoute);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
