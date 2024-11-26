const Role = require('../models/Role');

const getRoles = async (req, res) => {
  const roles = await Role.find();
  res.json(roles);
};

const addRole = async (req, res) => {
  const { name, permissions } = req.body;
  const role = new Role({ name, permissions });
  await role.save();
  res.json(role);
};

const updateRole = async (req, res) => {
  const { id } = req.params;
  const updatedRole = await Role.findByIdAndUpdate(id, req.body, { new: true });
  res.json(updatedRole);
};

const deleteRole = async (req, res) => {
  const { id } = req.params;
  await Role.findByIdAndDelete(id);
  res.json({ message: 'Role deleted' });
};

module.exports = { getRoles, addRole, updateRole, deleteRole };
