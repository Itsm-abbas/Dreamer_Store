import User from "../../models/registerSchema";
import dbConnect from "../../utils/connectDB";
const bcrypt = require("bcrypt");
export default async function handler(req, res) {
  await dbConnect();
  const { method } = req;
  const { name, email, password } = req.body;
  if (method === "POST") {
    try {
      const user = await User.findOne({ email });
      if (user) {
        return res.status(400).json({
          status: "error",
          message: "User already exists",
        });
      } else {
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({
          name,
          email,
          password: hashedPassword,
        });
        await newUser.save();
        return res.status(201).json({
          status: "success",
        });
      }
    } catch (error) {
      return res.status(500).json({
        status: "error",
        message: error.message,
      });
    }

    // bcrypt.hash(password, 10, function (err, hash) {
    //   var newUser = new User({
    //     name: name,
    //     email: email,
    //     password: hash,
    //   });
    //   newUser.save();
    // });
  }
}
