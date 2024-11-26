const User = require('../models/User');
const Role = require('../models/Role');

const getUsers = async (req, res) => {
  const users = await User.find().populate('role');
  res.json(users);
};

const addUser = async (req, res) => {
  const { name, email, role, isActive } = req.body;
  const user = new User({ name, email, role, isActive });
  await user.save();
  res.json(user);
};

const updateUser = async (req, res) => {
  const { id } = req.params;
  const updatedUser = await User.findByIdAndUpdate(id, req.body, { new: true });
  res.json(updatedUser);
};

const deleteUser = async (req, res) => {
  const { id } = req.params;
  await User.findByIdAndDelete(id);
  res.json({ message: 'User deleted' });
};

module.exports = { getUsers, addUser, updateUser, deleteUser };
