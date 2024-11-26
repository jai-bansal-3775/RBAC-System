import React, { useEffect, useState } from 'react';
import {
  fetchRoles,
  createRole,
  updateRole,
  deleteRole,
} from '../api/api';
import './RoleManagement.css'; // Importing the custom CSS

const RoleManagement = () => {
  const [roles, setRoles] = useState([]);
  const [formData, setFormData] = useState({ name: '', permissions: [] });

  useEffect(() => {
    const getRoles = async () => {
      const res = await fetchRoles();
      setRoles(res.data);
    };
    getRoles();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData._id) {
      await updateRole(formData._id, formData);
    } else {
      await createRole(formData);
    }
    setFormData({ name: '', permissions: [] });
    const updatedRoles = await fetchRoles();
    setRoles(updatedRoles.data);
  };

  const handleDelete = async (id) => {
    await deleteRole(id);
    const updatedRoles = await fetchRoles();
    setRoles(updatedRoles.data);
  };

  return (
    <div className="role-management">
      <h2>Role Management</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Role Name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="Permissions (comma-separated)"
          value={formData.permissions}
          onChange={(e) =>
            setFormData({ ...formData, permissions: e.target.value.split(',') })
          }
        />
        <button type="submit">
          {formData._id ? 'Update' : 'Add'} Role
        </button>
      </form>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Permissions</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {roles.map((role) => (
            <tr key={role._id}>
              <td>{role.name}</td>
              <td>{role.permissions.join(', ')}</td>
              <td>
                <button onClick={() => setFormData(role)}>Edit</button>
                <button onClick={() => handleDelete(role._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RoleManagement;
