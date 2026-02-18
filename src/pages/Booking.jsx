import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaCog, FaSearch, FaFilter } from 'react-icons/fa';

const Booking = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  // Mock Data for Bookings
  const allBookings = Array.from({ length: 40 }, (_, i) => ({
    id: `#BK${2000 + i}`,
    user: `Passenger ${i + 1}`,
    route: i % 2 === 0 ? 'New York → Boston' : 'Los Angeles → San Francisco',
    date: `2023-11-${(i % 30) + 1}`,
    status: i % 5 === 0 ? 'Cancelled' : i % 3 === 0 ? 'Pending' : 'Confirmed',
    amount: `$${(Math.random() * 100 + 40).toFixed(2)}`,
    seat: `${['A', 'B', 'C', 'D'][i % 4]}${Math.ceil(Math.random() * 10)}`
  }));

  const totalPages = Math.ceil(allBookings.length / itemsPerPage);
  const currentBookings = allBookings.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden"
    >
      <div className="p-6 border-b border-slate-100 flex flex-col sm:flex-row justify-between items-center gap-4">
        <h3 className="text-lg font-bold text-slate-800">All Bookings</h3>
        <div className="flex gap-2">
          <div className="relative">
            <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input type="text" placeholder="Search bookings..." className="pl-10 pr-4 py-2 border border-slate-200 rounded-lg text-sm outline-none focus:border-primary" />
          </div>
          <button className="px-4 py-2 border border-slate-200 rounded-lg text-slate-600 hover:bg-slate-50 flex items-center gap-2 text-sm">
            <FaFilter /> Filter
          </button>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-50 text-slate-500 text-xs uppercase tracking-wider">
              <th className="p-4 font-semibold">Booking ID</th>
              <th className="p-4 font-semibold">Passenger</th>
              <th className="p-4 font-semibold">Route</th>
              <th className="p-4 font-semibold">Seat</th>
              <th className="p-4 font-semibold">Date</th>
              <th className="p-4 font-semibold">Status</th>
              <th className="p-4 font-semibold">Amount</th>
              <th className="p-4 font-semibold">Action</th>
            </tr>
          </thead>
          <tbody className="text-sm divide-y divide-slate-100">
            {currentBookings.map((booking) => (
              <tr key={booking.id} className="hover:bg-slate-50/50 transition-colors">
                <td className="p-4 font-medium text-primary">{booking.id}</td>
                <td className="p-4 text-slate-700">{booking.user}</td>
                <td className="p-4 text-slate-600">{booking.route}</td>
                <td className="p-4 text-slate-600">{booking.seat}</td>
                <td className="p-4 text-slate-500">{booking.date}</td>
                <td className="p-4">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    booking.status === 'Confirmed' ? 'bg-green-100 text-green-700' :
                    booking.status === 'Pending' ? 'bg-yellow-100 text-yellow-700' :
                    'bg-red-100 text-red-700'
                  }`}>
                    {booking.status}
                  </span>
                </td>
                <td className="p-4 font-medium text-slate-800">{booking.amount}</td>
                <td className="p-4">
                  <button className="text-slate-400 hover:text-primary transition-colors"><FaCog /></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
};

export default Booking;
