const express = require("express");
const multer = require("multer");
const ApiController = require("../controllers/api");
const router = express.Router();
const upload = multer();
router.post("/api/fileanalyse", upload.single("upfile") ,ApiController.postFile);

module.exports = router;
