const express = require("express");
const router = express.Router();

const { Add_Coach, Get_coachs } = require("../controllers/coach-controller");

const coachs = require("../models/coach");

// add coach

router.post("/coach", Add_Coach);

// get caochs

router.get("/coachs", Get_coachs);

// delete coach
router.delete("/coachs/:_id", (req, res) => {
  let { _id } = req.params;
  coachs
    .findByIdAndDelete(_id)
    .then(res.send("coach deleted SUCCESSFULLY"))
    .catch((err) => res.send(err));
});

module.exports = router;
