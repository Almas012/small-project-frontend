import React from 'react';
import { motion } from 'framer-motion';
import { FaBus, FaEdit, FaTrash, FaPlus } from 'react-icons/fa';

const Buses = () => {
  // Mock Data for Buses
  const buses = [
    { id: 'B001', name: 'Voyage Express X1', plate: 'NY-854-AB', capacity: 45, type: 'Sleeper', status: 'Active' },
    { id: 'B002', name: 'Voyage City Link', plate: 'CA-992-XC', capacity: 32, type: 'Seater', status: 'Maintenance' },
    { id: 'B003', name: 'Voyage Night Rider', plate: 'TX-112-ZZ', capacity: 40, type: 'Semi-Sleeper', status: 'Active' },
    { id: 'B004', name: 'Voyage Express X2', plate: 'NY-855-AB', capacity: 45, type: 'Sleeper', status: 'Active' },
    { id: 'B005', name: 'Voyage Local', plate: 'FL-334-QQ', capacity: 50, type: 'Seater', status: 'Inactive' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-6"
    >
      <div className="flex justify-end">
        <button className="bg-primary text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-primary-hover transition-colors shadow-lg shadow-primary/30">
          <FaPlus /> Add New Bus
        </button>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
        <div className="p-6 border-b border-slate-100">
          <h3 className="text-lg font-bold text-slate-800">Fleet Overview</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 text-slate-500 text-xs uppercase tracking-wider">
                <th className="p-4 font-semibold">Bus ID</th>
                <th className="p-4 font-semibold">Bus Name</th>
                <th className="p-4 font-semibold">Plate Number</th>
                <th className="p-4 font-semibold">Type</th>
                <th className="p-4 font-semibold">Capacity</th>
                <th className="p-4 font-semibold">Status</th>
                <th className="p-4 font-semibold text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="text-sm divide-y divide-slate-100">
              {buses.map((bus) => (
                <tr key={bus.id} className="hover:bg-slate-50/50 transition-colors">
                  <td className="p-4 font-medium text-primary flex items-center gap-2">
                    <FaBus className="text-slate-400" /> {bus.id}
                  </td>
                  <td className="p-4 text-slate-700 font-medium">{bus.name}</td>
                  <td className="p-4 text-slate-600 font-mono bg-slate-50 rounded px-2 py-1 w-fit text-xs">{bus.plate}</td>
                  <td className="p-4 text-slate-600">{bus.type}</td>
                  <td className="p-4 text-slate-600">{bus.capacity} Seats</td>
                  <td className="p-4">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      bus.status === 'Active' ? 'bg-green-100 text-green-700' :
                      bus.status === 'Maintenance' ? 'bg-yellow-100 text-yellow-700' :
                      'bg-slate-100 text-slate-600'
                    }`}>
                      {bus.status}
                    </span>
                  </td>
                  <td className="p-4 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <button className="p-2 text-slate-400 hover:text-blue-500 transition-colors"><FaEdit /></button>
                      <button className="p-2 text-slate-400 hover:text-red-500 transition-colors"><FaTrash /></button>
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

export default Buses;
