const express = require("express");
const askMe = require("../Functions/askMe");
const rephrase = require("../Functions/rephrase");
const router = express.Router();

router.post('/askMe', askMe);
router.post('/rephrase', rephrase);

module.exports = router;