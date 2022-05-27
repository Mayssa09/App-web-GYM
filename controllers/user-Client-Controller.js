// 1- REGISTER CLIENT
const bycrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const UserClient = require("../models/userClient");


exports.registerClientUSer = async (req, res) => {
  const userClient = { ...req.body };
  const Email = userClient.email;
  const searchClient = await UserClient.findOne({ email: Email });
  if (searchClient)
    return res.status(401).json({ msg: "UserClient already exist" });
  try {
    const newClient = await new UserClient({ ...userClient });
    const salt = await bycrypt.genSalt(10);
    const hash = await bycrypt.hash(newClient.password, salt);
    newClient.password = hash;
    await newClient.save();
    res.status(200).json({ msg: "UserClient register successfuly" });
  } catch (error) {
    console.log(error);
    res.status(402).json({ msg: "UserClient register failed" });
  }
};

// 2 - LOGIN

exports.LoginClient = async (req, res) => {
  const { email, password } = { ...req.body };

  const FirstClient = await UserClient.findOne({ email });
  if (!FirstClient)
    return res.status(403).json({ msg: "Email not really exist" });
  const isMatch = await bycrypt.compare(password, FirstClient.password);

  if (!isMatch) return res.status(404).json({ msg: "Bad credentiel" });

  const payload = {
    id: FirstClient._id,
    email: FirstClient.email,
    first_Name: FirstClient.first_Name,
    last_Name: FirstClient.last_Name,
    phone: FirstClient.phone,
  };

  try {
    const token = await jwt.sign(payload, process.env.secretOrKey);
    res
      .status(200)
      .json({ msg: "Login with success", token: `Bearer ${token}` });
  } catch (error) {
    return res.status(405).json({ msg: "Login failed" });
  }
};

// get all clients

exports.Get_clients = async (req, res) => {
  try {
    const clients = await UserClient.find();
    res.status(202).json(clients);
  } catch (error) {
    res.status(405).json({ msg: "clients not found" });
  }
};

