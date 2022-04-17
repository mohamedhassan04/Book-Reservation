const express = require("express");
const app = express();
const connectDB = require("./DBconnect");
const passport = require("passport");

const port = process.env.PORT || 5000;

require("dotenv").config();

connectDB();

app.use(express.json());

app.use(passport.initialize());
app.use("/api/books/", require("./routes/bookRoute"));
app.use("/api/users/", require("./routes/userRoute"));
app.use("/api/bookings/", require("./routes/bookingsRoute"));

app.get("/", (res, req) => res.send("hello world!"));
app.listen(port, () => console.log(`server is running in port ${port}`));
