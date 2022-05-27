const Activity = require("../models/Activities");

//Add activity

exports.Add_activity = async (req, res) => {
  const newActivity = { ...req.body };

  try {
    const new_activity = await new Activity({ ...newActivity });
    await new_activity.save();
    res.status(201).json({ msg: "add activity with success" });
  } catch (error) {
    return res.status(406).json({ msg: "add activity failed" });
  }
};

//get all activities

exports.Get_activities = async (req, res) => {
  try {
    const activities = await Activity.find();

    res.status(200).json(activities);
  } catch (error) {
    return res.status(404).json({ msg: "activities not found" });
  }
};
