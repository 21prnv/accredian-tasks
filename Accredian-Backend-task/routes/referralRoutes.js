const express = require("express");
const { createReferral } = require("../controller/referralController");

const router = express.Router();

router.post("/", createReferral);

module.exports = router;
