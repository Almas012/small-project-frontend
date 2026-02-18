import React from 'react';
import { motion } from 'framer-motion';
import { FaUser, FaEdit, FaTrash, FaEnvelope, FaShieldAlt, FaBan, FaCheckCircle } from 'react-icons/fa';

const Users = () => {
  // Mock Data
  const users = [
    { id: 'U001', name: 'John Doe', email: 'john@example.com', role: 'Admin', status: 'Active', joined: '2023-01-15' },
    { id: 'U002', name: 'Alice Smith', email: 'alice@example.com', role: 'User', status: 'Active', joined: '2023-02-20' },
    { id: 'U003', name: 'Bob Johnson', email: 'bob@example.com', role: 'User', status: 'Blocked', joined: '2023-03-10' },
    { id: 'U004', name: 'Emma Wilson', email: 'emma@example.com', role: 'User', status: 'Active', joined: '2023-04-05' },
    { id: 'U005', name: 'Michael Brown', email: 'michael@example.com', role: 'Moderator', status: 'Active', joined: '2023-05-12' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-6"
    >
      <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
        <div className="p-6 border-b border-slate-100 flex justify-between items-center">
          <h3 className="text-lg font-bold text-slate-800">User Management</h3>
          <span className="text-sm text-slate-500">Total Users: {users.length}</span>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 text-slate-500 text-xs uppercase tracking-wider">
                <th className="p-4 font-semibold">User</th>
                <th className="p-4 font-semibold">Role</th>
                <th className="p-4 font-semibold">Status</th>
                <th className="p-4 font-semibold">Joined Date</th>
                <th className="p-4 font-semibold text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="text-sm divide-y divide-slate-100">
              {users.map((user) => (
                <tr key={user.id} className="hover:bg-slate-50/50 transition-colors">
                  <td className="p-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                        {user.name.charAt(0)}
                      </div>
                      <div>
                        <p className="font-bold text-slate-800">{user.name}</p>
                        <p className="text-xs text-slate-500 flex items-center gap-1">
                          <FaEnvelope size={10} /> {user.email}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="p-4">
                    <span className={`flex items-center gap-1 text-slate-600 ${user.role === 'Admin' ? 'text-purple-600 font-medium' : ''}`}>
                      {user.role === 'Admin' && <FaShieldAlt />} {user.role}
                    </span>
                  </td>
                  <td className="p-4">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium flex items-center gap-1 w-fit ${
                      user.status === 'Active' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                    }`}>
                      {user.status === 'Active' ? <FaCheckCircle size={10} /> : <FaBan size={10} />}
                      {user.status}
                    </span>
                  </td>
                  <td className="p-4 text-slate-500">{user.joined}</td>
                  <td className="p-4 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <button className="p-2 text-slate-400 hover:text-blue-500 transition-colors" title="Edit User"><FaEdit /></button>
                      <button className="p-2 text-slate-400 hover:text-red-500 transition-colors" title="Delete User"><FaTrash /></button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </motion.div>
  );
};

export default Users;
