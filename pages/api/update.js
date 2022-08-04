import dbConnect from "../../utils/connectDB";
import User from "../../models/registerSchema";
import { resolveSoa } from "dns";
const bcrypt = require("bcrypt");
export default async function handler(req, res) {
  await dbConnect();
  const { id, name, password, change_password, avatar } = req.body;
  const user = await User.findById(id);

  bcrypt.compare(password, user.password, (err, isMatch) => {
    if (err) {
      res.status(500).json({ error: err });
    }
    if (isMatch) {
      if (name) {
        user.name = name;
      }
      if (change_password) {
        user.password = bcrypt.hashSync(change_password, 10);
      }
      if (avatar) {
        user.avatar = avatar;
      }
      user.save();
      res.status(200).json({
        message: "Updated successfully",
        user,
      });
    } else {
      res.status(400).json({
        message: "Password is incorrect",
      });
    }
  });
  if (!user) {
    res.status(404).json({ message: "User not found" });
  }
}
