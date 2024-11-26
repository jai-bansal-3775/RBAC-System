// import React, { useEffect, useState } from 'react';
// import { fetchUsers, fetchRoles, createUser, updateUser, deleteUser } from '../api/api';

// const UserManagement = () => {
//   const [users, setUsers] = useState([]);
//   const [roles, setRoles] = useState([]);
//   const [formData, setFormData] = useState({ name: '', email: '', role: '', isActive: true });

//   useEffect(() => {
//     const getData = async () => {
//       const userRes = await fetchUsers();
//       const roleRes = await fetchRoles();
//       setUsers(userRes.data);
//       setRoles(roleRes.data);
//     };
//     getData();
//   }, []);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (formData._id) {
//       await updateUser(formData._id, formData);
//     } else {
//       await createUser(formData);
//     }
//     setFormData({ name: '', email: '', role: '', isActive: true });
//     const updatedUsers = await fetchUsers();
//     setUsers(updatedUsers.data);
//   };

//   const handleEdit = (user) => {
//     setFormData(user);
//   };

//   const handleDelete = async (id) => {
//     await deleteUser(id);
//     const updatedUsers = await fetchUsers();
//     setUsers(updatedUsers.data);
//   };

//   return (
//     <div>
//       <h2>User Management</h2>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           placeholder="Name"
//           value={formData.name}
//           onChange={(e) => setFormData({ ...formData, name: e.target.value })}
//           required
//         />
//         <input
//           type="email"
//           placeholder="Email"
//           value={formData.email}
//           onChange={(e) => setFormData({ ...formData, email: e.target.value })}
//           required
//         />
//         <select
//           value={formData.role}
//           onChange={(e) => setFormData({ ...formData, role: e.target.value })}
//           required
//         >
//           <option value="">Select Role</option>
//           {roles.map((role) => (
//             <option key={role._id} value={role._id}>
//               {role.name}
//             </option>
//           ))}
//         </select>
//         <button type="submit">{formData._id ? 'Update' : 'Add'} User</button>
//       </form>
//       <table>
//         <thead>
//           <tr>
//             <th>Name</th>
//             <th>Email</th>
//             <th>Role</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {users.map((user) => (
//             <tr key={user._id}>
//               <td>{user.name}</td>
//               <td>{user.email}</td>
//               <td>{user.role?.name}</td>
//               <td>
//                 <button onClick={() => handleEdit(user)}>Edit</button>
//                 <button onClick={() => handleDelete(user._id)}>Delete</button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default UserManagement;






import React, { useEffect, useState } from 'react';
import {
  fetchUsers,
  fetchRoles,
  createUser,
  updateUser,
  deleteUser,
} from '../api/api';
import './UserManagement.css'; // Importing the custom CSS

const UserManagement = () => {
  const [users, setUsers] = useState([]);
  const [roles, setRoles] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: '',
    isActive: true,
  });

  useEffect(() => {
    const getData = async () => {
      const userRes = await fetchUsers();
      const roleRes = await fetchRoles();
      setUsers(userRes.data);
      setRoles(roleRes.data);
    };
    getData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData._id) {
      await updateUser(formData._id, formData);
    } else {
      await createUser(formData);
    }
    setFormData({ name: '', email: '', role: '', isActive: true });
    const updatedUsers = await fetchUsers();
    setUsers(updatedUsers.data);
  };

  const handleEdit = (user) => {
    setFormData(user);
  };

  const handleDelete = async (id) => {
    await deleteUser(id);
    const updatedUsers = await fetchUsers();
    setUsers(updatedUsers.data);
  };

  return (
    <div className="user-management">
      <h2>User Management</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={formData.name}
          onChange={(e) =>
            setFormData({ ...formData, name: e.target.value })
          }
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={(e) =>
            setFormData({ ...formData, email: e.target.value })
          }
          required
        />
        <select
          value={formData.role}
          onChange={(e) =>
            setFormData({ ...formData, role: e.target.value })
          }
          required
        >
          <option value="">Select Role</option>
          {roles.map((role) => (
            <option key={role._id} value={role._id}>
              {role.name}
            </option>
          ))}
        </select>
        <button type="submit">
          {formData._id ? 'Update' : 'Add'} User
        </button>
      </form>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user._id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.role?.name}</td>
              <td>
                <button onClick={() => handleEdit(user)}>Edit</button>
                <button onClick={() => handleDelete(user._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserManagement;
