const userSchhema = require("../model/UserSchema");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const user = await userSchhema.findOne({ email });
    if (user) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new userSchhema({
      name,
      email,
      password: hashedPassword,
    });
    await newUser.save();
    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await userSchhema.findOne({ email });
    if (!user) {
      return res
        .status(401)
        .json({ success: false, message: "User not exists" });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res
        .status(401)
        .json({ success: false, message: "Invalid credentials" });
    }

    const token = jwt.sign({ userId: user._id }, process.env.SECRET_KEY, {
      expiresIn: "1h",
    });
    return res.status(200).json({
      success: true,
      token,
      user: { name: user.name },
      message: "Login successfully",
    });
  } catch (error) {
    return res.status(500).json({ message: "Error in login Server" });
  }
};

const getUser = async (req, res) => {
  return res.status(200).json({ success: true, user: req.user });
};

module.exports = { register, login, getUser };
