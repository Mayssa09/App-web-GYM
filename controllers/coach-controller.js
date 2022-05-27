const Coach = require("../models/coach");


//Add Coach

exports.Add_Coach = async (req, res) => {
    const newCoach = { ...req.body };
  
    try {
      const new_Coach = await new Coach({ ...newCoach });
      await new_Coach.save();
      res.status(201).json({ msg: "add Coach with success" });
    } catch (error) {
      return res.status(407).json({ msg: "add Coach failed" });
    }
  };


  // get coachs

exports.Get_coachs = async (req, res) => {
    try {
      const coachs = await Coach.find();
      res.status(200).json(coachs);
    } catch (error) {
      return res.status(404).json({ msg: "coachs not found" });
    }
  };