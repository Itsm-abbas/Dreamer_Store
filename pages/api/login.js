import dbConnect from "../../utils/connectDB";
import User from "../../models/registerSchema";
const bcrypt = require("bcrypt");
export default async function handler(req, res) {
  await dbConnect();
  await User.findOne({ email: req.body.email }, (err, user) => {
    if (user === null) res.status(400).end();
    else {
      bcrypt.compare(req.body.password, user.password, (err, result) => {
        if (result) {
          res.status(200).send(user);
        } else {
          res.status(400).end();
        }
      });
    }
  }).clone();
}
