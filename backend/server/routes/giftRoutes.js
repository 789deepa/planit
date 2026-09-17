const express = require("express");
const router = express.Router();
const giftController = require("../controllers/giftController");

// POST /api/gifts
router.post("/gifts", giftController.generateGifts);

// POST /api/dates
router.post("/dates", giftController.generateDates);

module.exports = router;

