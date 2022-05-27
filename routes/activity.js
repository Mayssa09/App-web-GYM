const express = require("express");
const router = express.Router();

const {
  Add_activity,
  Get_activities,
} = require("../controllers/activity-Controller");

const Activities = require("../models/Activities");

router.post("/activities", Add_activity);
router.get("/activities", Get_activities);

// delete activity

router.delete("/activities/:_id", (req, res) => {
  let { _id } = req.params;
  Activities.findByIdAndDelete({ _id })
    .then(res.send("activity deleted SUCCESSFULLY"))
    .catch((err) => res.send(err));
});

// edit activity
router.put("/activities/:_id", (req, res) => {
  let { _id } = req.params;

  Activities.findByIdAndUpdate({ _id }, { $set: { ...req.body } })

    .then(res.send("THIS ACTIVITY HAS BEEN UPDATED SUCCESSFULLY!"))
    .catch((err) => res.send(err));
});

module.exports = router;
