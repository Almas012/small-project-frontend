import React from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkedAlt, FaEdit, FaTrash, FaPlus, FaClock, FaRoad } from 'react-icons/fa';

const Routes = () => {
  // Mock Data
  const routes = [
    { id: 'R101', start: 'New York', end: 'Boston', distance: '350 km', duration: '4h 30m', stops: 2, status: 'Active' },
    { id: 'R102', start: 'Los Angeles', end: 'San Francisco', distance: '615 km', duration: '6h 15m', stops: 3, status: 'Active' },
    { id: 'R103', start: 'Chicago', end: 'Detroit', distance: '460 km', duration: '5h 00m', stops: 1, status: 'Maintenance' },
    { id: 'R104', start: 'Houston', end: 'Indianapolis', distance: '1500 km', duration: '14h 20m', stops: 5, status: 'Active' },
    { id: 'R105', start: 'Miami', end: 'Dallas', distance: '1300 km', duration: '12h 45m', stops: 4, status: 'Inactive' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-6"
    >
      <div className="flex justify-end">
        <button className="bg-primary text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-primary-hover transition-colors shadow-lg shadow-primary/30">
          <FaPlus /> Add New Route
        </button>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
        <div className="p-6 border-b border-slate-100">
          <h3 className="text-lg font-bold text-slate-800">Route Management</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 text-slate-500 text-xs uppercase tracking-wider">
                <th className="p-4 font-semibold">Route ID</th>
                <th className="p-4 font-semibold">Start Point</th>
                <th className="p-4 font-semibold">End Point</th>
                <th className="p-4 font-semibold">Distance</th>
                <th className="p-4 font-semibold">Est. Duration</th>
                <th className="p-4 font-semibold">Stops</th>
                <th className="p-4 font-semibold">Status</th>
                <th className="p-4 font-semibold text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="text-sm divide-y divide-slate-100">
              {routes.map((route) => (
                <tr key={route.id} className="hover:bg-slate-50/50 transition-colors">
                  <td className="p-4 font-medium text-primary flex items-center gap-2">
                    <FaMapMarkedAlt className="text-slate-400" /> {route.id}
                  </td>
                  <td className="p-4 text-slate-700 font-medium">{route.start}</td>
                  <td className="p-4 text-slate-700 font-medium">{route.end}</td>
                  <td className="p-4 text-slate-600 flex items-center gap-1"><FaRoad className="text-slate-300"/> {route.distance}</td>
                  <td className="p-4 text-slate-600"><span className="flex items-center gap-1"><FaClock className="text-slate-300"/> {route.duration}</span></td>
                  <td className="p-4 text-slate-600">{route.stops} Stops</td>
                  <td className="p-4">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      route.status === 'Active' ? 'bg-green-100 text-green-700' :
                      route.status === 'Maintenance' ? 'bg-yellow-100 text-yellow-700' :
                      'bg-slate-100 text-slate-600'
                    }`}>
                      {route.status}
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

export default Routes;
