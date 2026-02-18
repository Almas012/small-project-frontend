import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { 
  FaBus, 
  FaUser, 
  FaTicketAlt, 
  FaChartLine, 
  FaCog, 
  FaSignOutAlt, 
  FaSearch, 
  FaBell, 
  FaBars,
  FaTimes,
  FaMapMarkedAlt
} from 'react-icons/fa';

const AdminDashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('currentUser');
    navigate('/signin');
  };

  const getPageTitle = () => {
    switch (location.pathname) {
      case '/admin/bookings': return 'Manage Bookings';
      case '/admin/buses': return 'Fleet Management';
      case '/admin/routes': return 'Route Management';
      default: return 'Dashboard Overview';
    }
  };

  return (
    <div className="flex min-h-screen bg-slate-50">
      {/* Sidebar */}
      <motion.aside 
        initial={{ width: isSidebarOpen ? 250 : 0, opacity: isSidebarOpen ? 1 : 0 }}
        animate={{ width: isSidebarOpen ? 250 : 0, opacity: isSidebarOpen ? 1 : 0 }}
        className={`bg-white border-r border-slate-200 fixed md:relative z-30 h-full overflow-hidden flex flex-col transition-all duration-300 ${isSidebarOpen ? 'w-64' : 'w-0'}`}
        style={{ height: '100vh' }}
      >
        <div className="p-6 border-b border-slate-100 flex justify-between items-center">
          <h2 className="text-xl font-bold text-primary flex items-center gap-2">
            <FaBus /> Admin
          </h2>
          <button onClick={() => setIsSidebarOpen(false)} className="md:hidden text-slate-400 hover:text-slate-600">
            <FaTimes />
          </button>
        </div>
        
        <nav className="flex-1 overflow-y-auto py-4">
          <ul className="space-y-1 px-3">
            <li>
              <Link to="/admin" className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${location.pathname === '/admin' ? 'bg-primary/10 text-primary font-medium' : 'text-slate-600 hover:bg-slate-50'}`}>
                <FaChartLine /> Dashboard
              </Link>
            </li>
            <li>
              <Link to="/admin/bookings" className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${location.pathname === '/admin/bookings' ? 'bg-primary/10 text-primary font-medium' : 'text-slate-600 hover:bg-slate-50'}`}>
                <FaTicketAlt /> Bookings
              </Link>
            </li>
            <li>
              <Link to="/admin/buses" className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${location.pathname === '/admin/buses' ? 'bg-primary/10 text-primary font-medium' : 'text-slate-600 hover:bg-slate-50'}`}>
                <FaBus /> Buses
              </Link>
            </li>
            <li>
              <Link to="/admin/routes" className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${location.pathname === '/admin/routes' ? 'bg-primary/10 text-primary font-medium' : 'text-slate-600 hover:bg-slate-50'}`}>
                <FaMapMarkedAlt /> Routes
              </Link>
            </li>
            <li>
              <Link to="/admin/users" className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${location.pathname === '/admin/users' ? 'bg-primary/10 text-primary font-medium' : 'text-slate-600 hover:bg-slate-50'}`}>
                <FaUser /> Users
              </Link>
            </li>
            <li>
              <Link to="/admin/settings" className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${location.pathname === '/admin/settings' ? 'bg-primary/10 text-primary font-medium' : 'text-slate-600 hover:bg-slate-50'}`}>
                <FaCog /> Settings
              </Link>
            </li>
          </ul>
        </nav>

        <div className="p-4 border-t border-slate-100">
          <button onClick={handleLogout} className="flex items-center gap-3 px-4 py-3 w-full rounded-lg text-red-500 hover:bg-red-50 transition-colors">
            <FaSignOutAlt /> Sign Out
          </button>
        </div>
      </motion.aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto p-4 md:p-8 w-full">
        {/* Header */}
        <header className="flex justify-between items-center mb-8">
          <div className="flex items-center gap-4">
            <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="p-2 rounded-lg bg-white border border-slate-200 text-slate-600 hover:text-primary transition-colors">
              <FaBars />
            </button>
            <div>
              <h1 className="text-2xl font-bold text-slate-800">{getPageTitle()}</h1>
              <p className="text-slate-500 text-sm">Welcome back, Admin</p>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center bg-white border border-slate-200 rounded-full px-4 py-2 w-64">
              <FaSearch className="text-slate-400 mr-2" />
              <input type="text" placeholder="Search..." className="bg-transparent outline-none w-full text-sm" />
            </div>
            <button className="p-2 relative text-slate-600 hover:text-primary transition-colors">
              <FaBell size={20} />
              <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
              AD
            </div>
          </div>
        </header>

        <Outlet />
      </main>
    </div>
  );
};

export const DashboardOverview = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  // Mock Data
  const stats = [
    { title: 'Total Revenue', value: '$128,430', change: '+12%', icon: FaChartLine, color: 'bg-green-100 text-green-600' },
    { title: 'Total Bookings', value: '8,543', change: '+5%', icon: FaTicketAlt, color: 'bg-purple-100 text-purple-600' },
    { title: 'Active Buses', value: '42', change: '0%', icon: FaBus, color: 'bg-blue-100 text-blue-600' },
    { title: 'Total Users', value: '12,345', change: '+18%', icon: FaUser, color: 'bg-orange-100 text-orange-600' },
  ];

  const allBookings = Array.from({ length: 25 }, (_, i) => ({
    id: `#BK${1000 + i}`,
    user: `User ${i + 1}`,
    route: i % 2 === 0 ? 'New York → Boston' : 'Los Angeles → San Francisco',
    date: `2023-10-${(i % 30) + 1}`,
    status: i % 5 === 0 ? 'Cancelled' : i % 3 === 0 ? 'Pending' : 'Confirmed',
    amount: `$${(Math.random() * 100 + 20).toFixed(2)}`
  }));

  const totalPages = Math.ceil(allBookings.length / itemsPerPage);
  const currentBookings = allBookings.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <>
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100"
            >
              <div className="flex justify-between items-start mb-4">
                <div className={`p-3 rounded-xl ${stat.color}`}>
                  <stat.icon size={20} />
                </div>
                <span className={`text-xs font-medium px-2 py-1 rounded-full ${stat.change.startsWith('+') ? 'bg-green-50 text-green-600' : 'bg-slate-100 text-slate-600'}`}>
                  {stat.change}
                </span>
              </div>
              <h3 className="text-slate-500 text-sm font-medium mb-1">{stat.title}</h3>
              <p className="text-2xl font-bold text-slate-800">{stat.value}</p>
            </motion.div>
          ))}
        </div>

        {/* Recent Bookings */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
          <div className="p-6 border-b border-slate-100 flex justify-between items-center">
            <h3 className="text-lg font-bold text-slate-800">Recent Bookings</h3>
            <button className="text-primary text-sm font-medium hover:underline">View All</button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50 text-slate-500 text-xs uppercase tracking-wider">
                  <th className="p-4 font-semibold">Booking ID</th>
                  <th className="p-4 font-semibold">User</th>
                  <th className="p-4 font-semibold">Route</th>
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
                      <button className="text-slate-400 hover:text-primary transition-colors">
                        <FaCog />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          {/* Pagination */}
          <div className="p-4 border-t border-slate-100 flex justify-between items-center">
            <span className="text-sm text-slate-500">
              Showing {((currentPage - 1) * itemsPerPage) + 1} to {Math.min(currentPage * itemsPerPage, allBookings.length)} of {allBookings.length} entries
            </span>
            <div className="flex gap-2">
              <button 
                onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                disabled={currentPage === 1}
                className="px-3 py-1 rounded border border-slate-200 text-slate-600 disabled:opacity-50 hover:bg-slate-50 text-sm transition-colors"
              >
                Previous
              </button>
              {[...Array(totalPages)].map((_, i) => (
                <button 
                  key={i}
                  onClick={() => setCurrentPage(i + 1)}
                  className={`px-3 py-1 rounded border text-sm transition-colors ${currentPage === i + 1 ? 'bg-primary text-white border-primary' : 'border-slate-200 text-slate-600 hover:bg-slate-50'}`}
                >
                  {i + 1}
                </button>
              ))}
              <button 
                onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                disabled={currentPage === totalPages}
                className="px-3 py-1 rounded border border-slate-200 text-slate-600 disabled:opacity-50 hover:bg-slate-50 text-sm transition-colors"
              >
                Next
              </button>
            </div>
          </div>
        </div>
    </>
  );
};

export default AdminDashboard;
