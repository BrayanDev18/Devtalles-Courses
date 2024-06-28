import bcrypt from "bcryptjs";
import User from "../models/user.model.js";
import { createAccessToken } from "../libs/jwt.js";

export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: 'User not found' });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });

    const token = await createAccessToken({ id: user.id });
    res.cookie('token', token);

    res.json({
      id: user.id,
      userName: user.userName,
      email: user.email,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt
    });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const register = async (req, res) => {
  const { email, password, userName } = req.body;

  try {
    const hashPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      userName,
      email,
      password: hashPassword
    });

    const userSave = await newUser.save();

    const token = await createAccessToken({ id: userSave.id });
    res.cookie('token', token);

    res.json({
      id: userSave.id,
      userName: userSave.userName,
      email: userSave.email,
      createdAt: userSave.createdAt,
      updatedAt: userSave.updatedAt
    });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const logout = (req, res) => {
  res.cookie('token', "", { expires: new Date(0) });

  return res.sendStatus(200);
};

export const profile = async (req, res) => {
  const user = await User.findById(req.user.id);
  if (!user) return res.status(400).json({ message: 'User not found' });

  console.log(user);

  return res.json({
    id: user.id,
    userName: user.userName,
    email: user.email,
    createdAt: user.createdAt,
    updatedAt: user.updatedAt
  });
};
