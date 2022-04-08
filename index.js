const express = require("express");
const connectDB = require("./config/connectDB");
const contactRoutes = require("./routes/contact");

const app = express();

connectDB();
app.use("/api/contact", contactRoutes);
const port = 5000;
app.listen(port, () => console.log(`server is running on port ${port}`));
