const express = require("express");

const isAuth = require("../middlewares/passport-setup");
const {
  registerClientUSer,
  LoginClient,

  Get_clients,

} = require("../controllers/user-Client-Controller");
const { registerRules, validator } = require("../middlewares/validator");
const UserClient = require("../models/userClient");

const router = express.Router();

router.post("/registerClient", registerRules(), validator, registerClientUSer);
router.post("/login", LoginClient);
router.get("/currentuser", isAuth(), (req, res) => {
  res.json(req.user);
});


router.get("/clients", Get_clients);



router.delete("/clients/:_id", (request, response) => {
  let { _id } = request.params;
  UserClient.findByIdAndDelete(_id)
    .then(response.send("client deleted SUCCESSFULLY"))
    .catch((err) => response.send(err));
});

module.exports = router;
