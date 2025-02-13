const express = require("express");
const cors = require("cors");
const referralRoutes = require("./routes/referralRoutes");

require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/referrals", referralRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
